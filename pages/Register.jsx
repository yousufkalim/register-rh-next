import React from "react";
import Image from "next/image";
import Link from "next/link";

import RegisterImg from "../public/landingPage/images/logo_white.png";
export default function Register() {
  return (
    <div>
      <div className="register">
        <div className="row">
          <div className="col-md-3 register-left">
            <Image src={RegisterImg} alt="RegisterImg" />
            <h4 id="appName" className="text-white">
              Registre RH
            </h4>
            <p className="text-white">
              Découvrez Registre RH en créant un compte ou connectez-vous à
              votre compte en cliquant ci-dessous
            </p>
            <Link href="/Login">
              <a className="login-link btn-outline-sm ">Se connecter</a>
            </Link>
            <br />
          </div>
          <div className="col-md-9 register-right">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <form method="post" autoComplete="off">
                  <div className="row register-form">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input className="form-control" placeholder="Nom" />
                        <span className="text-danger" />
                      </div>
                      <div className="form-group">
                        <input className="form-control" placeholder="Email" />
                        <span className="text-danger" />
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control"
                          placeholder="Mot de passe"
                        />
                        <span className="text-danger" />
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control"
                          placeholder="Etablissement principal"
                        />
                        <span className="text-danger" />
                      </div>
                      <div className="form-group"></div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input className="form-control" placeholder="Prenom" />
                        <span className="text-danger" />
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control"
                          placeholder="Mot de passe"
                        />
                        <span className="text-danger" />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Nom de la societe"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Activité"
                        />
                      </div>
                      <input
                        type="submit"
                        className="btnRegister"
                        value="S'inscrire"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
