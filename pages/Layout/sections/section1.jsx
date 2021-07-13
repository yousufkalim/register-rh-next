import React from "react";

export default function section1() {
  return (
    <div id="details" className="basic-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h1
              className="h2-heading"
              style={{ width: "100%", paddingBottom: "20px" }}
            >
              <i className="fa fa-cogs" aria-hidden="true"></i>
              Comment digitaliser votre registre unique du personnel, votre DUER
              et le registre de sécurité ?
            </h1>
          </div>
        </div>
        <div className='row'> 
          <div className="col-lg-12">
        <div className="row">
          <div className="col-lg-6">
            <div className="text-container">
              <div className="d-flex">
                  <h2>
                    <i className="fa fa-window-restore" aria-hidden="true"></i>
                  </h2>
               
                  <h2 className="ml-3">Qu’est-ce que l’application « Registre RH » ?</h2>
              </div>

              <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                L’application Registre RH vous permet de digitaliser simplement
                vos données RH :
              </p>
              <ul className="list-unstyled li-space-lg ">
                <li className="media">
                  <i className="fas fa-square" />
                  <div className="media-body">
                    Vos 3 registres sociaux obligatoires des entreprises :
                  </div>
                </li>
                <li className="media">
                  <i
                    className="fas fa-caret-square-right"
                    style={{ marginLeft: "20px" }}
                  />
                  <div className="media-body">
                    <a href="#personal" className="page-scroll text-dark">
                          Registre unique du personnel
                    </a>
                  </div>
                </li>
                <li className="media">
                  <i
                    className="fas fa-caret-square-right"
                    style={{ marginLeft: "20px" }}
                  />
                  <div className="media-body">
                    <a href="#singleRisk" className="page-scroll text-dark">
                          {" "}
                          Document unique d’évaluation des risques professionnels
                    </a>
                  </div>
                </li>
                <li className="media">
                  <i
                    className="fas fa-caret-square-right"
                    style={{ marginLeft: "20px" }}
                  />
                  <div className="media-body">
                    <a href="#security" className="page-scroll text-dark">
                          {" "}
                          Registre des contrôles de sécurité
                    </a>
                  </div>
                </li>
                <li className="media">
                  <i className="fas fa-square" />
                  <div className="media-body">
                    Les dossiers des collaborateurs internes, externes
                    (Centralisation des données administratives tel que RIB,
                    adresse, carte grise, contrat de travail, contrat de mise à
                    disposition, certification…).
                  </div>
                </li>
              </ul>
            </div>{" "}
            {/* end of text-container */}
          </div>{" "}
          {/* end of col */}
          <div className="col-lg-6">
            <div className="card" style={{ marginTop: "4%" }}>
              <header className="card-header">
                <div className="row">
                  <div className="col-sm">
                    <a
                      href="#"
                      data-toggle="collapse"
                      data-target="#collapse14"
                      aria-expanded="true"
                    >
                      <i className="icon-action fas fa-tools pr-2" />
                      <span>Entièrement paramétrable</span>
                    </a>
                  </div>
                  <a
                    href="#"
                    data-toggle="collapse"
                    data-target="#collapse14"
                    aria-expanded="true"
                  >
                    <div className="col-sm">
                      <i className="icon-action fa fa-chevron-down" />
                    </div>
                  </a>
                </div>
                <a
                  href="#"
                  data-toggle="collapse"
                  data-target="#collapse14"
                  aria-expanded="true"
                ></a>
              </header>
              <div className="collapse show" id="collapse14">
                <article className="card-body">
                  <p>
                    Registre RH vous permet d’accéder simplement à des données
                    complémentaires que vous aurez défini à votre libre choix
                    (coefficient des agences de travail temporaire…).
                  </p>
                </article>{" "}
                {/* card-body.// */}
              </div>{" "}
              {/* collapse .// */}
            </div>
            <div className="card">
              <header className="card-header">
                <div className="row">
                  <div className="col-sm">
                    <a
                      href="#"
                      data-toggle="collapse"
                      data-target="#collapse15"
                      aria-expanded="true"
                    >
                      <i className="icon-action fa fa-cloud pr-2" />
                      <span>
                        Connexion sécurisée on Premise ou en mode SAAS
                      </span>
                    </a>
                  </div>
                  <a
                    href="#"
                    data-toggle="collapse"
                    data-target="#collapse15"
                    aria-expanded="true"
                  >
                    <div className="col-sm">
                      <i className="icon-action fa fa-chevron-down" />
                    </div>
                  </a>
                </div>
                <a
                  href="#"
                  data-toggle="collapse"
                  data-target="#collapse15"
                  aria-expanded="true"
                ></a>
              </header>
              <div className="collapse hide" id="collapse15">
                <article className="card-body">
                  <p>
                    Accessibles en ligne au moyen d’identifiants personnels ou
                    de façon automatique par la connexion sécurisée SSO (Single
                    Sign-On), vos registres sont digitalisés, entièrement
                    sécurisés, certifiés en conformité en cas de contrôle et
                    répondent aux obligations « numérique » imposé par le Code
                    du Travail.
                  </p>
                </article>{" "}
                {/* card-body.// */}
              </div>{" "}
              {/* collapse .// */}
            </div>
            <div className="card">
              <header className="card-header">
                <div className="row">
                  <div className="col-sm">
                    <a
                      href="#"
                      data-toggle="collapse"
                      data-target="#collapse16"
                      aria-expanded="true"
                    >
                      <i className="icon-action fas fa-user-shield pr-2" />
                      <span>Accessible par et pour tous les acteurs</span>
                    </a>
                  </div>
                  <a
                    href="#"
                    data-toggle="collapse"
                    data-target="#collapse16"
                    aria-expanded="true"
                    className
                  >
                    <div className="col-sm">
                      <i className="icon-action fa fa-chevron-down" />
                    </div>
                  </a>
                </div>
                <a
                  href="#"
                  data-toggle="collapse"
                  data-target="#collapse16"
                  aria-expanded="true"
                ></a>
              </header>
              <div className="collapse hide" id="collapse16">
                <article className="card-body">
                  <p>
                    Les données sont saisissables manuellement au plus proche du
                    terrain ou interopérables avec votre SI ou le SI de votre
                    comptable et ainsi, vos données disponibles en temps réelle
                    seront partagées entre les dirigeants, DRH, DAF, et votre
                    comptable externe.
                  </p>
                </article>{" "}
                {/* card-body.// */}
              </div>{" "}
              {/* collapse .// */}
            </div>
            {/* end of image-container */}
          </div>
        </div>
        </div>
        </div>
        {/* end of row */}
      </div>{" "}
      {/* end of container */}
    </div>
  );
}
