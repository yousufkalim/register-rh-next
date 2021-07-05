import React from "react";
import Link from "next/link";

export default function Login() {
  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-lg-6 col-md-12 login-form-1">
          <h3>
            <strong id="appName" />
          </h3>
          <div className="form-group text-center">
            <h3>
              <strong>Registre RH</strong>
            </h3>
          </div>
          <div className="row ">
            <div>
              <p>
                L’application Registre RH vous permet de digitaliser simplement
                vos 3 registres sociaux obligatoires des entreprises
              </p>
            </div>
            <ul className="a">
              <li>Registre unique du personnel</li>
              <li>Document unique d’évaluation des risques professionnels</li>
              <li>Registre des contrôles de sécurité</li>
            </ul>
            <p id="list">
              Les dossiers des collaborateurs internes &amp; externes.
            </p>
          </div>
          <div className="form-group text-center">
            <Link href="/Layout/Register">
              <a className="btnSubmit btn ">Découvrir Registre RH</a>
            </Link>
          </div>
          <div className="form-group"></div>
        </div>
        <div className="col-lg-6 col-md-12 login-form-2">
          <div>
            <h3>
              <strong>
                Vous avez déjà un compte ? Connectez-vous à votre compte !
              </strong>
            </h3>
          </div>
          <form id="account" method="post">
            <b>
              <div
                className="text-danger"
                style={{ backgroundColor: "white" }}
              />
            </b>
            <div className="form-group">
              <input className="form-control" />
              <span className="text-danger" />
            </div>
            <div className="form-group">
              <input className="form-control" />
              <span className="text-danger" />
            </div>
            <div className="row">
              <div className="form-group col-6 text-left">
                <input
                  type="submit"
                  className="btnSubmit btn "
                  defaultValue="Se connecter"
                />
              </div>
              <div className="form-group col-6  text-right pt-1 ">
                <a className="ForgetPwd " value="Login">
                  Mot de passe oublié ?
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
