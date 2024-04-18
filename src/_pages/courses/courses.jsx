import React, { useState } from 'react';
import Header from "../../_assets/components/Header";
import "./courses.css";
import {eletivas, trilhas} from './dados';

export default function Course() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // Exemplo de dados de eletivas
    // Calcula o índice do último item e do primeiro item da página atual
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    // Filtra os itens da lista para renderizar apenas os itens da página atual
    const currentItems = eletivas.slice(indexOfFirstItem, indexOfLastItem);

    // Função para alterar a página atual
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <Header />
            <section id="section" >
                <div className='box scrollable-section' >
                    <div className="d-flex justify-content-center">
                        <div className="container mt-5">
                            <h2 className="text-center mb-4">Matérias Eletivas</h2>
                            <div className="d-flex justify-content-between mb-4">
                                <div className="w-30">
                                    <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Pesquisar eletiva..." />
                                    <datalist id="datalistOptions">
                                        {eletivas.map((eletiva, index) => (
                                            <option key={index} value={eletiva.descricao} />
                                        ))}
                                    </datalist>
                                </div>
                            </div>
                            <table className="table table-bordered table-hover custom-table">
                                <thead className="table-dark">
                                    <tr>
                                        <th className='text-center'>ID</th>
                                        <th className='text-center'>Descrição</th>
                                        <th className='text-center'>Horários</th>
                                        <th className='text-center'>Turma</th>
                                        <th className='text-center'>Vagas Disponíveis</th>
                                        <th className='text-center'>Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentItems.map((eletiva, index) => (
                                        <tr key={index}>
                                            <td className='text-center'>{eletiva.nome}</td>
                                            <td className='text-center'>{eletiva.descricao}</td>
                                            <td className='text-center'>{eletiva.horarios}</td>
                                            <td className='text-center'>{eletiva.turma}</td>
                                            <td className='text-center'>{eletiva.vagas}</td>
                                            <td className='text-center'>
                                                <div className="btn-group dropend">
                                                    <i className="bi bi-three-dots-vertical" style={{ cursor: "pointer" }} data-bs-toggle="dropdown"></i>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="#">Menu item</a></li>
                                                        <li><a className="dropdown-item" href="#">Menu item</a></li>
                                                        <li><a className="dropdown-item" href="#">Menu item</a></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {/* Paginação */}
                            <nav aria-label="Page navigation example" className="custom-pagination">
                                <ul className="pagination justify-content-center">
                                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                        <button className="page-link" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>Anterior</button>
                                    </li>
                                    {[...Array(Math.ceil(eletivas.length / itemsPerPage)).keys()].map((number) => (
                                        <li key={number + 1} className={`page-item ${currentPage === number + 1 ? 'active' : ''}`}>
                                            <button className="page-link" onClick={() => paginate(number + 1)}>{number + 1}</button>
                                        </li>
                                    ))}
                                    <li className={`page-item ${currentPage === Math.ceil(eletivas.length / itemsPerPage) ? 'disabled' : ''}`}>
                                        <button className="page-link" onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(eletivas.length / itemsPerPage)}>Próximo</button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="container mt-5">
                        <h2 className="text-center mb-4">Trilhas</h2>
                        <div className="d-flex justify-content-between mb-4">
                            <div className="w-30">
                                <input className="form-control" list="trilhasDatalistOptions" id="trilhasDataList" placeholder="Pesquisar trilha..." />
                                <datalist id="trilhasDatalistOptions">
                                    {trilhas.map((trilha, index) => (
                                        <option key={index} value={trilha.descricao} />
                                    ))}
                                </datalist>
                            </div>
                        </div>
                        {/* Lista de trilhas */}
                        <table className="table table-bordered table-hover custom-table">
                            <thead className="table-dark">
                                <tr>
                                    <th className='text-center'>ID</th>
                                    <th className='text-center'>Descrição</th>
                                    <th className='text-center'>Horários</th>
                                    <th className='text-center'>Turma</th>
                                    <th className='text-center'>Vagas Disponíveis</th>
                                    <th className='text-center'>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {trilhas.map((trilha, index) => (
                                    <tr key={index}>
                                        <td className='text-center'>{trilha.nome}</td>
                                        <td className='text-center'>{trilha.descricao}</td>
                                        <td className='text-center'>{trilha.horarios}</td>
                                        <td className='text-center'>{trilha.turma}</td>
                                        <td className='text-center'>{trilha.vagas}</td>
                                        <td className='text-center'>
                                            <div className="btn-group dropend">
                                                <i className="bi bi-three-dots-vertical" style={{ cursor: "pointer" }} data-bs-toggle="dropdown"></i>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                                </ul>
                                            </div></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <nav aria-label="Page navigation example" className="custom-pagination">
                            <ul class="pagination justify-content-center">
                                <li class="page-item disabled">
                                    <a class="page-link" href="./courses" tabindex="-1">Anterior</a>
                                </li>
                                <li class="page-item"><a class="page-link" href="./courses">1</a></li>
                                <li class="page-item"><a class="page-link" href="./courses">2</a></li>
                                <li class="page-item"><a class="page-link" href="./courses">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="./courses">Próximo</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
        </>
    );
}
