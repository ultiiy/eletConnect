import "./auth.css";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import logo from '../../_assets/images/logo/azul.png';
import imgLogin from '../../_assets/images/Computer login-cuate.png';

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    // Função para lidar com o envio do formulário de login
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Envie os dados para a API de login usando Axios
            const response = await axios.post('http://localhost:3001/auth/login', { email, senha });

            const { userId } = response.data;
            console.log('ID do usuário:', userId);
        } catch (error) {
            // Lógica para lidar com erros de login (por exemplo, exibir mensagem de erro)
            console.error('O servidor retornou algo: []', error.message);
        }
    };

    return (
        <>
            <div className="ladoEsquerdo">
                <img src={imgLogin} alt="" />
            </div>
            <div className="ladoDireito d-flex flex-column justify-content-between align-items-center">
                <Link to={"/"}>
                    <div className='d-flex align-items-center gap-2 mt-3 '>
                        <img width={50} src={logo} alt="" />
                        <h1 className='m-0 text-black fonte'>eletConnect</h1>
                    </div>
                </Link>
                <div className="container" style={{ padding: "4em" }}>
                    <div id='alert-message'></div>
                    <form onSubmit={handleSubmit}>
                        <div className="text-center pb-3">
                            <h3 className="fw-bold">Faça login na sua conta</h3>
                            <p>Você precisa estar logado para acessar o aplicativo.</p>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            <label>E-mail ou CNPJ</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" placeholder="Password" value={senha} onChange={(e) => setSenha(e.target.value)} required />
                            <label>Senha</label>
                            <p className="pt-1">Esqueceu sua senha? <Link to={"/forgot-password"}> Redefinir senha.</Link></p>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary p-2 w-100">Continuar</button>
                        </div>
                    </form>
                </div>
                <div className="mb-4">
                    <p className='m-0'>Você não tem uma conta? <Link to={"/register"}>Criar conta.</Link></p>
                </div>
            </div>
        </>
    );
}