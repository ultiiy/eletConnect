import "./settings.css";
import Header from "../../_assets/components/Header";
import Institution from "../../_assets/components/settings/institution";
import Profile from "../../_assets/components/settings/profile";

import "bootstrap";

export default function Perfil() {
    return (
        <>
            <Header />
            <section id='section'>
                <div className="box">
                    <div className="title">
                        <h3 className='m-0'>Configurações</h3>
                    </div>
                    <div className="p-5 pt-4">
                        <div id="alert-message"></div>
                        <div className="nav  nav-tabs" id="nav-tab" role="tablist">
                            <button className="nav-link text-dark active" id="nav-institution-tab" data-bs-toggle="tab" data-bs-target="#nav-institution" type="button" role="tab" aria-controls="nav-institution" aria-selected="true">Instituição</button>
                            <button className="nav-link text-dark" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Perfil</button>
                            <button className="nav-link text-dark" id="nav-security-tab" data-bs-toggle="tab" data-bs-target="#nav-security" type="button" role="tab" aria-controls="nav-security" aria-selected="false">Segurança</button>
                        </div>
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-institution" role="tabpanel" aria-labelledby="nav-institution-tab" tabIndex="0"><Institution /></div>
                            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0"><Profile /></div>
                            <div className="tab-pane fade" id="nav-security" role="tabpanel" aria-labelledby="nav-security-tab" tabIndex="0">...</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
