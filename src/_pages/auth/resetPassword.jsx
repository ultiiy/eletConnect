import './auth.css';
import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import logo from '../../_assets/images/logo/azul.png';
import imgReset from '../../_assets/images/Reset password-cuate.png';

export default function ResetPassword() {
    return (
        <div>
            <div className="ladoEsquerdo">
                <img src={imgReset} alt="" />
            </div>
            <div className="ladoDireito d-flex flex-column justify-content-between align-items-center ">
                <Link to={"/"}>
                    <div className='logo d-flex align-items-center gap-2 mt-3'>
                        <img width={50} src={logo} alt="" />
                        <h1 className='m-0 text-black'>eletConnect</h1>
                    </div>
                </Link>
                <div className="container" style={{ padding: "4em" }}>
                    <div id='alert-message'></div>
                    <form>
                        <div className="text-center">
                            <h3 className='fw-bold'>Redefinir sua senha</h3>
                            <p>Lembra da sua senha? <Link to={"/login"}>Fazer login</Link></p>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" id='inputSenha' className="form-control" placeholder="name@example.com" value={senha} onChange={(e) => setSenha(e.target.value)} required />
                            <label>Senha</label>
                            <div id="Feedback1" className="invalid-feedback"></div>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" id='inputConfirmarSenha' className="form-control" placeholder="name@example.com" value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} required />
                            <label>Confirmar senha</label>
                            <div id="Feedback2" className="invalid-feedback"></div>
                        </div>
                        <div className="mt-3 d-flex justify-content-center align-items-center gap-2">
                            <button type="submit" className="btn btn-primary p-2 w-100">Continuar</button>
                            <Link className='btn btn-outline-secondary p-2' to={"/login"}>Cancelar</Link>
                        </div>
                    </form>
                </div>
                <div className="mb-4 text-center">
                    <p className='m-0 px-5'>Ao continuar concorda em cumprir os <Link>Termos de Serviço</Link> da eletConnect e sua <Link>Política de Privacidade</Link></p>
                </div>
            </div>
        </div>
    );
}
