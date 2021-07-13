import React from "react";

export default function section2() {
  return (
    <div className="basic-1" id="mocha">
      <div className="container">
        
            <div className="row">
              <div className="col-sm-12 text-center">
                <h2 className="h2-heading">
                  <i className="fa fa-question-circle" aria-hidden="true"></i>À qui s’adresse «
                  Registre RH » ?
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
            <div
              className="text-container "
              style={{ textAlign: "justify", textJustify: "inter-word" }}
            >
              <p>
                <u style={{ fontWeight: "bold" }}>
                  Aux entreprises (mono site ou multi sites)
                </u>
              </p>
              <p>
              Dès l’arrivée du premier collaborateur, tous les établissements (public/privé) sont soumis à l’obligation de tenue de registres obligatoires et de documents uniques tels que :
              </p>
              <ul className="list-unstyled li-space-lg ">
                <li className="media">
                  <i className="fas fa-square" />
                  <div className="media-body">   
                    <a href="#personal" className="page-scroll text-dark">
                          <b>Registre unique du personnel</b>
                    </a>
                  </div>
                </li>
                <li className="media">
                  <i className="fas fa-square" />
                  <div className="media-body">
                    <a href="#singleRisk" className="page-scroll text-dark">
                          {" "}
                          <b> Document unique d’évaluation des risques </b>
                    </a>
                  </div>
                </li>
                <li className="media">
                  <i className="fas fa-square" />
                  <div className="media-body">
                    
                    <a href="#security" className="page-scroll text-dark">
                          {" "}
                          <b> Registre des contrôles de sécurité</b>
                    </a>
                  </div>
                </li>
              </ul>
              <p>
                <u style={{ fontWeight: "bold" }}>
                  Aux réseaux d’accompagnement comptable et social
                </u>
              </p>
              <p>
                Experts-comptables, gestionnaires de paie indépendants,
                l’application Registre RH vous permet de tenir à jour et de
                mettre en ligne en marque “blanche”,
                <b>
                  {" "}
                  le registre unique du personnel, document unique d’évaluation
                  des risques et registre des contrôles de sécurité.
                </b>
              </p>
              <p>
                <b> La digitalisation des dossiers du personnel</b> simplifiera,
                sécurisera et fluidifiera vos délais de traitement avec vos
                clients.
              </p>
              <ul className="list-unstyled li-space-lg ">
                <li className="media">
                  <i className="fas fa-square" />
                  <div className="media-body">
                    <b> Conformité en cas de contrôle</b>
                  </div>
                </li>
                <li className="media">
                  <i className="fas fa-square" />
                  <div className="media-body">
                    <b> Fluidité des échanges et traitements </b>
                  </div>
                </li>
              </ul>
              <p />
            </div>{" "}
            </div>
            </div>
            {/* end of text-container */}
          </div>{" "}
          {/* end of col */}
          {/*<div class="col-lg-6">
            <div class="image-container">
                <img class="img-fluid" src="/theme/landingPage/images/details.png" alt="alternative">
            </div>*/}
          {/* end of image-container */}
          {/*</div>*/} {/* end of col */}
          {/* end of col */}
        
      {/* end of container */}
    </div>
  );
}
