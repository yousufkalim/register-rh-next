import React from "react";

export default function section5() {
  return (
    <div id="personal" className="basic-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="h2-heading">
              <i className="fas fa-user-alt" />
              Registre unique du personnel
            </h2>
            <div
              className="text-container"
              style={{ textAlign: "justify", textJustify: "inter-word" }}
            >
              <p>
                Tout employeur se doit de tenir à jour son registre unique du
                personnel (Article L1221-13 du Code du Travail). Tout comme les
                registres relatifs aux conditions du travail ou le registre du
                comité social et économique (CSE), le registre unique du
                personnel est un document obligatoire.
              </p>
              <p>
                Ce document répertorie un ensemble d’informations sur chaque
                salarié afin de garantir la transparence des emplois dans
                l’entreprise.
              </p>
              <p>
                Le registre unique du personnel doit être édité dès la première
                embauche d’un salarié. Ce document concerne l’ensemble des
                salariés de l’entreprise et ce quel que soit son contrat : CDD,
                CDI, contrat d’apprentissage, contrat de professionnalisation,
                intérim... Il concerne aussi les stagiaires et les personnes
                volontaires en service civique, mais les modalités sont
                différentes.
              </p>
              <p>
                Le registre unique du personnel doit pouvoir être présenté à
                tout moment. En cas de contrôle, l’employeur doit donner le
                document obligatoire à jour.
              </p>
              <p>
                A défaut de présentation ou si les mentions du document sont
                erronées ou incomplètes, il peut y avoir une sanction (Article
                R1227-7 du Code du travail).
              </p>
              <p>
                L’employeur sera puni de l’amende prévue pour les contraventions
                de quatrième classe : jusqu’à 750 € pour les personnes
                physiques, et jusqu’à 3 750 € pour les personnes morales. Cette
                amende sera appliquée autant de fois qu’il y a de salariés dans
                des conditions susceptibles d&apos;être sanctionnées.
              </p>
              <p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.legifrance.gouv.fr/codes/id/LEGIARTI000033971569/2017-01-29/"
                >
                  https://www.legifrance.gouv.fr/codes/id/LEGIARTI000033971569/2017-01-29/
                </a>
              </p>
            </div>{" "}
            {/* end of text-container */}
          </div>{" "}
          {/* end of col */}
        </div>{" "}
        {/* end of row */}
      </div>{" "}
      {/* end of container */}
    </div>
  );
}
