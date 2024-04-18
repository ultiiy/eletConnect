import "./auth.css";
import React from 'react';
import { Link } from 'react-router-dom';

import imgLogin from "../../_assets/images/mobile/Forgot password-pana.png";
import escolaLogo from "../../_assets/images/mobile/Escola logo.png";


export default function Login() {
    return (
        <>
            <div className="emCima">
                <img src={imgLogin} alt="imgLogin" />
            </div>
            <div className="emBaixo ">
                <div className="m-4 text-center d-flex flex-column justify-content-center">
                    <span className="d-flex align-items-center gap-2 mb-4">
                        <img width={50} src={escolaLogo} alt="" />
                        <p className="m-0">CEM 03 TAGUATINGA</p>
                    </span>
                    <div className="d-flex flex-column justify-content-center">
                        <span className="mb-3">
                            <h1 className="m-0">Esqueceu sua senha?</h1>
                            <small>Lembrou sua senha? <Link to={"/mobile/login"}>Fazer login.</Link></small>
                        </span>
                        <form className="mb-2" action="" method="post">
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required />
                                <label>Email address</label>
                            </div>
                            <button className="btn btn-primary w-100 p-2 mt-1">Continuar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}