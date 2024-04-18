// src/components/Table.js
import React, { useState } from 'react';

const Table = ({ data, currentPage, itemsPerPage, onPageChange }) => {
  const [sortBy, setSortBy] = useState({ column: 'name', asc: true });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, data.length);

  const toggleSort = (column) => {
    if (sortBy.column === column) {
      setSortBy({ ...sortBy, asc: !sortBy.asc });
    } else {
      setSortBy({ column, asc: true });
    }
  };

  const sortedData = data.slice().sort((a, b) => {
    const comparison = sortBy.asc ? 1 : -1;
    return a[sortBy.column].localeCompare(b[sortBy.column]) * comparison;
  });

  const paginatedData = sortedData.slice(startIndex, endIndex);

  return (
    <div className='table-responsive'>
      <table className="table table-striped table-hover">
        <caption>Lista de alunos</caption>
        <thead>
          <tr>
            <th onClick={() => toggleSort('name')} style={{ cursor: 'pointer' }}>
              <span className='d-flex justify-content-between align-items-center'>
                <p className='m-0'>Nome</p>
                <i className="bi bi-arrow-down-up"></i>
              </span>
            </th>
            <th>Turma</th>
            <th>Eletivas</th>
            <th></th>
          </tr>
        </thead>
        <tbody className='table-group-divider'>
          {paginatedData.map((item, index) => (
            <tr key={index}>
              <td>
                <span className='d-flex gap-2'>
                  <img width={24} className='rounded-circle' src="https://www.gov.br/cdn/sso-status-bar/src/image/user.png" alt="" />
                  <p className='m-0'>{item.name}</p>
                </span>
              </td>
              <td>{item.turma}</td>
              <td>
                {Array.isArray(item.eletivas) ? (
                  item.eletivas.map((eletiva, eletivaIndex) => (
                    <p key={eletivaIndex} className="badge bg-secondary m-0 me-2 fw-normal">{eletiva}</p>
                  ))
                ) : null}
              </td>
              <td>
                <span className='d-flex gap-2'>
                  <i className="bi bi-arrow-clockwise"></i>
                  <i className="bi bi-pencil-square"></i>
                  <i className="bi bi-trash3"></i>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-between align-items-center">
        <p className='m-0'>Mostrando {startIndex + 1} a {endIndex} de {data.length} alunos cadastrados.</p>
        <nav aria-label="Page navigation">
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => onPageChange(currentPage - 1)}>Anterior</button>
            </li>
            {[...Array(Math.ceil(data.length / itemsPerPage)).keys()].map((pageNumber) => (
              <li key={pageNumber} className={`page-item ${currentPage === pageNumber + 1 ? 'active' : ''}`}>
                <button className="page-link" onClick={() => onPageChange(pageNumber + 1)}>{pageNumber + 1}</button>
              </li>
            ))}
            <li className={`page-item ${currentPage === Math.ceil(data.length / itemsPerPage) ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => onPageChange(currentPage + 1)}>Próxima</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Table;
