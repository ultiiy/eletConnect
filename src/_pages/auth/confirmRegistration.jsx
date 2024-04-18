import './auth.css';
import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../_assets/images/logo/azul.png';
import imgConfirm from '../../_assets/images/Confirmed-cuate.png';

export default function ConfirmRegistration() {
    return (
        <div>
            <div className="ladoEsquerdo">
                <img src={imgConfirm} alt="" />
            </div>
            <div className="ladoDireito d-flex flex-column justify-content-between align-items-center ">
                <Link to={"/"}>
                    <div className='logo d-flex align-items-center gap-2 mt-3'>
                        <img width={50} src={logo} alt="" />
                        <h1 className='m-0 text-black'>eletConnect</h1>
                    </div>
                </Link>
                <div className="container" style={{ padding: "4em" }}>
                    <div className='text-center'>
                        <h3 id='title'>Seu e-mail foi verificado com sucesso!</h3>
                        <p>Redirecionando para a página de login, em {count} segundos.</p>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
}
