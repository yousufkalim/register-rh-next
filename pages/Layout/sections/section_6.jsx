import React from "react";
import Image from "next/image";
import SoftwearImage from "../../../public/image6.png";
export default function section5() {
  return (
    <div id="propose" className="basic-2">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 ">
            <h2 className="h2-heading">
            A PROPOS DE NOUS : 
            </h2>

            {/* end of text-container */}
          </div>{" "}
          {/* end of col */}
        </div>{" "}
        {/* end of row */}
        <div id="basic2" className="d-flex  justify-content-center">
        
            <div className="image-container">
              <div className="img-wrapper">
                <Image
                  className="img-fluid"
                  src={SoftwearImage}
                  alt="alternative"
                />
              </div>{" "}
              {/* end of img-wrapper */}
            </div>{" "}
          
            <div className="right-section">
              <p>
                À l’heure de la digitalisation des documents et des processus,
                il semblait évident à nos deux dirigeants issus de la sphère RH
                et de la sphère technique, de faciliter la tenue du registre
                unique du personnel, document unique d’évaluation des risques
                (DUER), du registre des contrôles de sécurité tout en
                garantissant leur conformité avec le Code du Travail.
              </p>
              <p>
                En réponse à la demande de deux partenaires du monde du BTP et
                de l’industrie, la solution « Registre RH » a été développé pour
                :
              </p>

              <p>
                S’intégrer totalement au SI de nos partenaires Faciliter la
                consolidation des registres Répondre avec agilité aux
                contraintes légales et aux nouveaux aux modes de travail
              </p>
            </div>
          </div>
      </div>{" "}
      {/* end of container */}
    </div>
  );
}
