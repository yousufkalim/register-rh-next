import React from "react";
import Image from "next/image";

import DescImage1 from "../../../public/landingPage/images/description-1.png";
import DescImage2 from "../../../public/landingPage/images/description-2.png";
import DescImage3 from "../../../public/landingPage/images/description-3.png";
export default function section4() {
  return (
    <div id="features" className="cards-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-sm-12">
                <h2
                  className="h2-heading"
                  style={{ width: "100%", paddingBottom: "20px" }}
                >
                  <i className="fas fa-registered" />
                  Quels sont les 3 registres obligatoires proposés dans
                  l&apos;application <br />« Registre RH » ?
                </h2>
              </div>{" "}
              {/* end of col */}
            </div>{" "}
            {/* end of row */}
            <div className="row">
              <div className="col-lg-12">
                {/* Card */}
                <div className="row">
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
                        <a href="#personal" className="text-dark">
                          Registre unique du personnel
                        </a>
                      </h4>
                      <p>
                        Tout employeur se doit de tenir à jour son registre
                        unique du personnel (Article L1221-13 du Code du
                        Travail). Tout comme les registres relatifs aux
                        conditions du travail ou le registre du comité social et
                        économique (CSE), le registre unique du personnel est un
                        document obligatoire.
                      </p>
                    </div>
                  </div>
                  {/* end of card */}
                  {/* Card */}
                  <div className="card">
                    <div className="card-image">
                      <Image
                        className="img-fluid"
                        src={DescImage2}
                        alt="alternative"
                      />
                    </div>
                    <div className="card-body">
                      <h4 className="card-title">
                        <a href="#singleRisk" className="text-dark">
                          {" "}
                          Document unique d’évaluation des risques
                        </a>
                      </h4>
                      <p>
                        Le document unique d&apos;évaluation des risques (DUER)
                        liste les risques professionnels encourus par les
                        travailleurs et les actions de prévention et de
                        protection qui sont menées dans l&apos;entreprise.
                        <br />
                        Le DUER doit évoluer en fonction des nouveaux risques
                        identifiés.
                      </p>
                    </div>
                  </div>
                  {/* end of card */}
                  {/* Card */}
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
                        <a href="#security" className="text-dark">
                          {" "}
                          Registre de contrôles de sécurité
                        </a>
                      </h4>
                      <p>
                        Les règles de santé et de sécurité au travail relatives
                        au registre de sécurité réglementation pour les ERT
                        (Etablissements Recevant des Travailleurs) et pour le
                        personnel travaillant en ERP relèvent du Code du Travail
                        (CT).
                      </p>
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
