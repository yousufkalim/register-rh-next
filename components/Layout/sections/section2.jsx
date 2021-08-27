import React from "react";
import Image from "next/image";
import SoftwearImage from "../../../public/image8.png";

export default function section5() {
  return (
    <>
      <div className="basic-1">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 ">
              <h2 className="h2-heading">
                LA DIGITALISATION DES REGISTRES SOCIAUX AFIN DE :
              </h2>

              {/* end of text-container */}
            </div>{" "}
            {/* end of col */}
          </div>{" "}
          {/* end of row */}
          <div className="d-flex justify-content-center flexDiv">
            <div className="basic-card">
              <ul className="list-unstyled li-space-lg">
                <li className="media">
                  <i className="fas fa-caret-right" />
                  <div className="media-body  ">
                    Permettre aux organisations de garantir le respect des
                    obligations réglementaires en constante évolution, de gérer
                    les risques, d’augmenter l’efficacité et de produire de
                    meilleurs résultats commerciaux.
                  </div>
                </li>
                <li className="media">
                  <i className="fas fa-caret-right" />
                  <div className="media-body  ">
                    Permettre aux entreprises de toutes tailles de stimuler la
                    productivité, de gérer le changement et d’obtenir de
                    meilleurs résultats.
                  </div>
                </li>
                <li className="media">
                  <i className="fas fa-caret-right" />
                  <div className="media-body ">
                    Aider à protéger la santé et la prospérité des personnes et
                    contribue à une société sûre et juste pour son environnement
                    en fournissant des informations et des connaissances
                    approfondies aux professionnels.
                  </div>
                </li>
                <li className="media">
                  <i className="fas fa-caret-right" />
                  <div className="media-body ">
                    Notre modèle de création de valeur est au cœur de tout ce
                    que nous faisons et guide notre travail au quotidien.
                  </div>
                </li>
              </ul>
            </div>
            <div className="image-container">
              <div className=" card-image">
                <Image
                  unoptimized={true}
                  height="400px"
                  width="500px"
                  className="img-fluid"
                  src="/image8.png"
                  alt="alternative"
                />
              </div>{" "}
              {/* end of img-wrapper */}
            </div>{" "}
          </div>
        </div>{" "}
        {/* end of container */}
      </div>
    </>
  );
}
