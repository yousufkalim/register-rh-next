import React from "react";

export default function section6() {
  return (
    <div id="singleRisk" className="basic-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2
              className="h2-heading"
              style={{ width: "100%", paddingBottom: "20px" }}
            >
              <i className="fas fa-exclamation-triangle" />
              Document unique d’évaluation des risques (DUER)
            </h2>
            <div
              className="text-container"
              style={{ textAlign: "justify", textJustify: "inter-word" }}
            >
              <p>
                Le document unique d&apos;évaluation des risques (DUER) liste
                les risques professionnels encourus par les travailleurs et les
                actions de prévention et de protection qui sont menées dans
                l&apos;entreprise.
              </p>
              <p>
                <b>
                  Le DUER doit évoluer en fonction des nouveaux risques
                  identifiés. Par exemple l&apos;épidémie de Covid-19 vous
                  oblige à modifier le DUER{" "}
                </b>
                de façon importante. La digitalisation de votre document avec
                l’application registre RH vous permet d’être en conformité avec
                le Code du travail.
              </p>
              <p>
                L&apos;absence de transcription ou de mise à jour du document
                d&apos;évaluation des risques peut être sanctionné d&apos;une
                contravention de 1 500 € (3 000 € en cas de récidive).
              </p>
              <p>
                L&apos;employeur qui ne présente pas ce registre à
                l&apos;inspection du travail encoure une contravention de 450 €.
              </p>
              <p>
                <b> Pour les assureurs,</b> en tant qu’employeur, vous êtes tenu par la 
                loi d’assurer la sécurité de vos collaborateurs sur leur lieu de 
                travail. Pour cela, vous devez notamment mettre en place des actions 
                de prévention des risques professionnels. En cas de manquement vous prenez 
                le risque de ne pas être couvert par votre police d’assurance.
              </p>
              <p>
                <b>
                En cas de litige avec vos collaborateurs, le Conseil de prud’hommes 
                est compétent pour connaître des différends qui peuvent s’élever à 
                l’occasion de tout contrat de travail entre les employeurs et les salariés 
                et fait appel fréquemment au suivi du DUER de l’entreprise.
                </b>
              </p>
              <p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000000408526/"
                >
                  Voir Légifrance
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
