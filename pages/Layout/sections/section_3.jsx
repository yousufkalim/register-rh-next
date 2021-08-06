import React from "react";
import Image from "next/image";

import DescImage1 from "../../../public/image2.png";
import DescImage3 from "../../../public/image3.png";
export default function section3() {
  return (
    <div id="features" className="cards-2">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-sm-12">
                <h2 className="h2-heading">A QUI S’ADRESSE REGISTRE RH ?</h2>
              </div>{" "}
              {/* end of col */}
            </div>{" "}
            {/* end of row */}
            <div className="row">
              <div className="col-lg-12">
                {/* Card */}
                <div className="row">
                  <div className="col-lg-6">
                    <div>
                      <div className="card">
                        <div className="card-image">
                          <Image
                            className="img-fluid"
                            src={DescImage1}
                            alt="alternative"
                          />
                        </div>
                        <div className="card-body">
                          <h4 className="card-title">
                            <a
                              href="#personal"
                              className="text-white page-scroll"
                            >
                              AUX ENTREPRISES <br/>(MONO ET MULTI SITES)
                            </a>
                          </h4>
                          <p className="first">
                            Dès l’arrivée du premier collaborateur, tous les
                            établissements (public/privé) sont soumis à
                            l’obligation de tenue de registres obligatoires et
                            de documents uniques.
                          </p>
                          <p className="second">
                            La plateforme Registre RH permet de retrouver
                            l’ensemble de ces registres de façon simple et
                            sécurisée, afin que votre entreprise gagne en
                            efficacité.
                          </p>
                        </div>
                      </div>
                     
                    </div>
                  </div>
                  {/* end of card */}

                  {/* Card */}
                  <div className="col-lg-6">
                    <div>
                      <div className="card">
                        <div className="card-image">
                          <Image
                            className="img-fluid"
                            src={DescImage3}
                            alt="alternative"
                          />
                        </div>
                        <div className="card-body">
                          <h4 className="card-title">
                            <a
                              href="#security"
                              className="text-white page-scroll"
                            >
                              {" "}
                              AUX RESEAUX D’ACCOMPAGNEMENT COMPTABLE ET SOCIAL
                            </a>
                          </h4>
                          <p>
                            Experts-comptables, gestionnaires de paie
                            indépendants, l’application Registre RH vous permet
                            de tenir à jour et de mettre en ligne en marque
                            “blanche”, le registre unique du personnel, document
                            unique d’évaluation des risques et registre des
                            contrôles de sécurité.
                          </p>
                          <p>
                            La digitalisation des dossiers du personnel
                            simplifiera, sécurisera et fluidifiera vos délais de
                            traitement avec vos clients : conformité en cas de
                            contrôle, fluidité des échanges et traitements.
                          </p>
                        </div>
                      </div>
                     
                    </div>
                  </div>
                </div>
                {/* end of card */}
              </div>{" "}
              {/* end of col */}
            </div>{" "}
            {/* end of row */}
          </div>{" "}
          {/* end of container */}
        </div>{" "}
        {/* end of cards-1 */}
      </div>
    </div>
  );
}
