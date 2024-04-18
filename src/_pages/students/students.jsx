import React, { useState } from 'react';
import Header from '../../_assets/components/Header';
import Table from '../../_assets/components/students/Table';

const App = () => {
    const [filterText, setFilterText] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    const data = [
        { id: '1', name: 'João', turma: '1A', eletivas: ['Matemática', 'Português'] },
        { id: '2', name: 'Maria', turma: '2B', eletivas: ['História', 'Geografia'] },
        { id: '3', name: 'Pedro', turma: '3A', eletivas: ['Ciências', 'Inglês'] },
        { id: '4', name: 'Ana', turma: '2C', eletivas: ['Artes', 'Educação Física'] },
        { id: '5', name: 'Lucas', turma: '1B', eletivas: ['Informática', 'Espanhol'] },
        { id: '6', name: 'Julia', turma: '3A', eletivas: ['Biologia', 'Literatura'] },
        { id: '7', name: 'Carlos', turma: '3C', eletivas: ['Física', 'Química'] },
        { id: '8', name: 'Larissa', turma: '2B', eletivas: ['Filosofia', 'Sociologia'] },
        { id: '9', name: 'Gabriel', turma: '2A', eletivas: ['Música', 'Teatro'] },
        { id: '10', name: 'Isabela', turma: '2C', eletivas: ['Economia', 'Política'] },
        { id: '11', name: 'Felipe', turma: '1B', eletivas: ['Psicologia', 'Lógica'] },
        { id: '12', name: 'Laura', turma: '3A', eletivas: ['Astrologia', 'Nutrição'] },
        { id: '13', name: 'Rodrigo', turma: '2C', eletivas: ['Engenharia', 'Medicina'] },
        { id: '14', name: 'Mariana', turma: '1B', eletivas: ['Direito', 'Administração'] },
        { id: '15', name: 'Fernando', turma: '2A', eletivas: ['Gastronomia', 'Turismo'] },
        { id: '16', name: 'Camila', turma: '1C', eletivas: ['Arquitetura', 'Design'] },
    ];

    const handleInputChange = (e) => {
        setFilterText(e.target.value);
        setCurrentPage(1);
    };

    const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(filterText.toLowerCase())
    );

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <Header />
            <section id='section'>
                <div className="box">
                    <div className="title d-flex justify-content-between align-items-center">
                        <h3 className='m-0'>Alunos</h3>
                        <button className='btn btn-outline-secondary'><i className="bi bi-person-add me-2"></i>cadastrar</button>
                    </div>
                    <div className=" p-4">
                        <div className="d-flex justify-content-between">
                            <span></span>
                            <form className="position-relative">
                                <input type="text" className="form-control" placeholder="Filtrar alunos..." onChange={handleInputChange} />
                                <i className="bi bi-search position-absolute top-50 end-0 translate-middle-y me-3"></i>
                            </form>
                        </div>
                        <Table data={filteredData} currentPage={currentPage} itemsPerPage={itemsPerPage} onPageChange={handlePageChange} />
                    </div>
                </div>
            </section >
        </>
    );
};

export default App;
