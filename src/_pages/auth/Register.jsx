import './auth.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../_assets/images/logo/azul.png';
import imgRegister from '../../_assets/images/Sign up-cuate.png';

export default function Register() {
    const [cnpj, setCnpj] = useState('');

    const maskedCnpj = (cnpj) => {
        const unmaskedCnpj = cnpj.target.value.replace(/\D/g, '');
        const maskedCnpj = unmaskedCnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
        setCnpj(maskedCnpj.slice(0, 18));
    };

    function validateCNPJ(cnpj) {
        cnpj = cnpj.replace(/\D/g, '');

        if (cnpj.length !== 14) {
            return false;
        }

        if (/^(\d)\1+$/.test(cnpj)) {
            return false;
        }

        let sum = 0;
        let size = cnpj.length - 2;
        let numbers = cnpj.substring(0, size);
        let digits = cnpj.substring(size);
        let position = size - 7;
        for (let i = size; i >= 1; i--) {
            sum += numbers.charAt(size - i) * position--;
            if (position < 2) {
                position = 9;
            }
        }

        let result = sum % 11 < 2 ? 0 : 11 - sum % 11;

        if (result != digits.charAt(0)) {
            return false;
        }

        sum = 0;
        size = size + 1;
        numbers = cnpj.substring(0, size);
        position = size - 7;
        for (let i = size; i >= 1; i--) {
            sum += numbers.charAt(size - i) * position--;
            if (position < 2) {
                position = 9;
            }
        }
        result = sum % 11 < 2 ? 0 : 11 - sum % 11;

        if (result != digits.charAt(1)) {
            return false;
        }

        return true;
    }

    if(!validateCNPJ) {
        console.log("CNPJ invalido");
    }

    return (
        <div>
            <div className="ladoEsquerdo">
                <img src={imgRegister} alt="" />
            </div>
            <div className="ladoDireito d-flex flex-column justify-content-between align-items-center">
                <Link to={"/"}>
                    <div className='logo d-flex align-items-center gap-2 mt-3'>
                        <img width={50} src={logo} alt="" />
                        <h1 className='m-0 text-black'>eletConnect</h1>
                    </div>
                </Link>
                <div className="container" style={{ padding: "4em" }}>
                    <div id="alert-message"></div>
                    <form>
                        <div className="text-center">
                            <h3 className='fw-bold'>Criar uma nova conta</h3>
                            <p>ou faça <Link to={"/login"}>login na sua conta</Link></p>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="inputCNPJ" placeholder="name@example.com" maxLength="18" value={cnpj} onChange={maskedCnpj} required />
                            <label>CNPJ</label>
                            <div id="Feedback1" className="invalid-feedback"></div>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id='inputNome' placeholder="name@example.com" required />
                            <label>Nome da instituição</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id='inputEmail' placeholder="name@example.com" required />
                            <label>E-mail da instituição</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" id='inputSenha' placeholder="Password" required />
                            <label>Senha</label>
                            <div id="Feedback2" className="invalid-feedback"></div>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" id='inputConfirmarSenha' placeholder="Password" required />
                            <label>Confirmar senha</label>
                            <div id="Feedback3" className="invalid-feedback"></div>
                        </div>
                        <div className="text-center mt-3">
                            <button type="submit" className="btn btn-primary p-2 w-100">Criar conta</button>
                        </div>
                    </form>
                </div>
                <div className="mb-4 text-center">
                    <p className='m-0 px-5'>Ao continuar concorda em cumprir os <Link>Termos de Serviço</Link> da EletivaConnect e sua <Link>Política de Privacidade</Link></p>
                </div>
            </div>
        </div>
    );
}

