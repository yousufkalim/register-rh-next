import React from "react";
import Image from "next/image";

import DescImage1 from "../../../public/landingPage/images/description-1.png";
import DescImage2 from "../../../public/landingPage/images/description-2.png";
import DescImage3 from "../../../public/landingPage/images/description-3.png";
export default function section1() {
  return (
    <div id="features" className="cards-1">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-sm-12">
                <h2 className="h2-heading">
                  ZOOM SUR LES TROIS REGISTRES OBLIGATOIRES
                </h2>
              </div>{" "}
              {/* end of col */}
            </div>{" "}
            {/* end of row */}
            <div className="row">
              <div className="col-lg-12">
                {/* Card */}
                <div  className="d-flex  justify-content-center flexDiv3 ">
                  
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
                          
                              className="text-white "
                            >
                              Registre unique du personnel
                            </a>
                          </h4>
                          <p>
                            Ce document répertorie un ensemble d’informations
                            sur chaque salarié afin de garantir la transparence
                            des emplois dans l’entreprise.
                          </p>
                        </div>
                        {/* <div className="button-wrapper">
                        <a  className="btn-solid-reg ">
                          En savoir plus
                        </a>
                      </div> */}
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
                            <a
                            
                              className="text-white"
                            >
                              {" "}
                              DUER
                            </a>
                          </h4>
                          <p>
                            Le document unique d’évaluation des risques (DUER)
                            liste les risques professionnels encourus par les
                            travailleurs et les actions de prévention et de
                            protection qui sont menées dans l’entreprise.
                          </p>
                        </div>
                        {/* <div className="button-wrapper">
                        <a  className="btn-solid-reg ">
                          En savoir plus
                        </a>
                      </div> */}
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
                            <a
                              
                              className="text-white "
                            >
                              {" "}
                              Registre de contrôles de sécurité
                            </a>
                          </h4>
                          <p>
                            Les règles de santé et de sécurité au travail
                            relatives au registre de sécurité réglementation
                            pour les ERT et pour le personnel travaillant en ERP
                            relèvent du Code du Travail .
                          </p>
                        </div>
                        {/* <div className="button-wrapper">
                        <a  className="btn-solid-reg ">
                          En savoir plus
                        </a>
                      </div> */}
                      </div>
                     
                    </div>
                
                {/* end of card */}
              </div>{" "}
              {/* end of col */}

            </div>{" "}
            {/* end of row */}
            <div id="hamzaDiv"></div>

          </div>{" "}
          {/* end of container */}

        </div>{" "}
        {/* end of cards-1 */}

      </div>
    </div>
  );
}
