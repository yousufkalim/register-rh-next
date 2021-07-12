import React from "react";

export default function section10() {
  return (
    <div id="about" className="basic-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-sm-12 text-center">
                <h2 className="h2-heading">
                  <i className="fas fa-info-circle" />À propos
                </h2>
              </div>
            </div>
            <div
              className="text-container"
              style={{ textAlign: "justify", textJustify: "inter-word" }}
            >
              <p>
                À l’heure de la <b>digitalisation des documents</b> et des processus, il
                semblait évident à nos deux dirigeants issus de la sphère RH et
                de la sphère technique, de{" "}
                <b>
                  faciliter la tenue du registre unique du personnel, document
                  unique d’évaluation des risques (DUER), du registre des
                  contrôles de sécurité tout en garantissant leur conformité
                  avec le Code du Travail.
                </b>
              </p>
              <p>
                En réponse à la demande de deux partenaires du monde du BTP et
                de l’industrie, la solution « Registre RH » a été développé pour
                :
              </p>
              <ul className="list-unstyled li-space-lg ">
                <li className="media">
                  <i className="fas fa-square" />
                  <div className="media-body">
                    <b> S’intégrer totalement au SI de nos partenaires</b>
                  </div>
                </li>
                <li className="media">
                  <i className="fas fa-square" />
                  <div className="media-body">
                    <b> Faciliter la consolidation des registres</b>
                  </div>
                </li>
                <li className="media">
                  <i className="fas fa-square" />
                  <div className="media-body">
                    <b>
                      {" "}
                      Répondre avec agilité aux contraintes légales et aux
                      nouveaux aux modes de travail
                    </b>
                  </div>
                </li>
              </ul>
            </div>
          </div>{" "}
          {/* end of col */}
        </div>{" "}
        {/* end of row */}
      </div>{" "}
      {/* end of container */}
    </div>
  );
}
