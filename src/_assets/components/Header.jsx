import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import logo from '../images/logo/azul.png';
import logoEscola from '../images/mobile/Escola logo.png';
import "bootstrap";

export default function Header() {
    const location = useLocation();
    const menuItems = [
        { path: '/home', label: 'Início', icon: 'bi bi-bookmark' },
        { path: '/students', label: 'Alunos', icon: 'bi bi-people' },
        { path: '/courses', label: 'Eletivas', icon: 'bi bi-journal' },
        { path: '/settings', label: 'Configurações', icon: 'bi bi-gear' },
    ];

    return (
        <header id='header'>
            <div id='header-head' className='header-head'>
                <div className="logo-details gap-2">
                    <img width={40} src={logo} alt='' />
                    <h1>eletConnect</h1>
                </div>
                <div className="d-flex">
                    <img className='p-1' width={50} src={logoEscola} alt="User Avatar" />
                    <div className="profile-details">
                        <img src='https://sb-admin-pro-angular.startbootstrap.com/assets/img/illustrations/profiles/profile-1.png' alt="User Avatar" />
                        <span className="admin_name">Brenda Silva Alves</span>
                    </div>
                </div>
            </div>
            <nav id='header-nav'>
                <ul>
                    {menuItems.map((item) => (
                        <li key={item.path} className={location.pathname === item.path ? 'active' : ''} data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title={item.label}>
                            <Link to={item.path}>
                                <i className={item.icon}></i>
                                <span>{item.label}</span>
                            </Link>
                        </li>
                    ))}
                    <li className="log_out" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Deslogar">
                        <Link to={"/login"}>
                            <i className="bi bi-box-arrow-left"></i>
                            <span>Deslogar</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header >
    );
}
