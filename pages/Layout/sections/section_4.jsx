import React from "react";

export default function section3() {
  return (
    <div id="first" className="tabs">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="h2-heading">LES AVANTAGES DE NOTRE SOLUTION :</h2>
          </div>
          {/* end of col */}
        </div>
        {/* end of row */}

        <div className="d-flex flexDiv justify-content-md-center">
          <div className="basic-card">
            <h5>
              <i className="fas fa-stream pr-2" />
              Simplicité
            </h5>
            <ul className="list-unstyled li-space-lg">
              <li className="media">
                <i className="fas fa-square" />
                <div className="media-body  ">
                  Page d’accueil <b> simplifiée </b>par utilisateur
                </div>
              </li>
              <li className="media">
                <i className="fas fa-square" />
                <div className="media-body  ">
                  Accès simplifié à vos <b>données RH digitalisées (SIRH)</b>
                </div>
              </li>
              <li className="media">
                <i className="fas fa-square" />
                <div className="media-body ">
                  <b> Paramétrage simple</b> pour collecter des données
                  complémentaires à des fins de reporting
                </div>
              </li>
              <li className="media">
                <i className="fas fa-square" />
                <div className="media-body ">
                  Intégration simplifiée avec votre SI. L’application registre
                  RH s&apos;<b>interface</b> avec les principaux logiciels du
                  marché.
                </div>
              </li>
            </ul>
          </div>

          {/* end of col */}

          <div className="basic-card">
            <h5>
              <i className="fas fa-check-square pr-2" />
              Conformité
            </h5>
            <ul className="list-unstyled li-space-lg">
              <li className="media">
                <i className="fas fa-square" />
                <div className="media-body ">
                  Garantie d’avoir des <b>registres digitalisés</b> en
                  conformités avec le <b> code du travail</b>
                </div>
              </li>
              <li className="media">
                <i className="fas fa-square" />
                <div className="media-body ">
                  Possibilité de joindre des documents aux fiches individuelles
                  des collaborateurs internes/externes (DPAE, contrats de
                  travail, contrat de mise à disposition, autorisations
                  administratives, certification…)
                </div>
              </li>
            </ul>
          </div>

          <div className="basic-card">
            <h5>
              <i className="fas fa-cloud pr-2" />
              En mode SaaS
            </h5>
            <ul className="list-unstyled li-space-lg">
              <li className="media">
                <i className="fas fa-square" />
                <div className="media-body ">
                  <b>Support</b> et centre d&apos;aide
                </div>
              </li>
              <li className="media">
                <i className="fas fa-square" />
                <div className="media-body ">
                  <b> Accessible 24/7</b> sur ordinateur, tablette et mobile
                </div>
              </li>
              <li className="media">
                <i className="fas fa-square" />
                <div className="media-body ">
                  Taux de disponibilité garanti de 99,7%
                </div>
              </li>
              <li className="media">
                <i className="fas fa-square" />
                <div className="media-body ">
                  <b>Sécurisation des données</b>
                </div>
              </li>
              <li className="media">
                <i className="fas fa-square" />
                <div className="media-body ">
                  <b> Maintenance </b>et mises à jour automatiques
                </div>
              </li>
              <li className="media">
                <i className="fas fa-square" />
                <div className="media-body ">Données hébergées en France</div>
              </li>
            </ul>
          </div>
          {/* end of col */}
        </div>

        <div className="d-flex flexDiv pt-4 mt-4 justify-content-md-center">
          <div className="basic-card">
            <h5>
              <i className="fas fa-shield-alt pr-2" />
              Securité
            </h5>
            <ul className="list-unstyled li-space-lg">
              <li className="media">
                <i className="fas fa-square" />
                <div className="media-body ">
                  Connexion de vos collaborateurs avec profils spécifiques
                  limités à leur utilisation
                </div>
              </li>
              <li className="media">
                <i className="fas fa-square" />
                <div className="media-body ">
                  <b>Connexion sécurisée en SSO</b>
                </div>
              </li>
              <li className="media">
                <i className="fas fa-square" />
                <div className="media-body ">
                  Mise à disposition des documents dans un coffre-fort
                  électronique certifié
                </div>
              </li>
              <li className="media">
                <i className="fas fa-square" />
                <div className="media-body ">
                  <b>Signature électronique via l&apos;API de votre choix</b>
                </div>
              </li>
            </ul>
          </div>
          {/* end of col */}
          <div className="basic-card">
            <h5>
              <i className="fas fa-adjust pr-2" />
              Flexibilité
            </h5>
            <ul className="list-unstyled li-space-lg">
              <li className="media">
                <i className="fas fa-square" />
                <div className="media-body ">
                  Gestion manuelle des collaborateurs (salariés, stagiaires,
                  intérimaires)
                </div>
              </li>
              <li className="media">
                <i className="fas fa-square" />
                <div className="media-body ">
                  Possibilité d&apos;automatisation par
                  <b> interface avec votre SI </b>
                  (outils comptable, RH, outil de gestion des intérimaires…)
                </div>
              </li>
              <li className="media">
                <i className="fas fa-square" />
                <div className="media-body ">
                  Gestion des profils d&apos;utilisateurs, des formulaires des
                  différents registres et des paramètres de l&apos;application
                </div>
              </li>
              <li className="media">
                <i className="fas fa-square" />
                <div className="media-body ">
                  Disponible en mode On Premise (avec connexion avec l&apos;AD,
                  installation sur votre serveur,...)
                </div>
              </li>
            </ul>
          </div>

          <div className="basic-card">
            <h5>
              <i className="fas fa-file-signature pr-2" />
              Exploitabilité
            </h5>
            <ul className="list-unstyled li-space-lg">
              <li className="media">
                <i className="fas fa-square" />
                <div className="media-body ">
                  Visualisation rapide des registres de l’ensemble de vos
                  établissements
                </div>
              </li>
              <li className="media">
                <i className="fas fa-square" />
                <div className="media-body ">
                  <b>
                    {" "}
                    Édition facile en PDF Excel, Word et PDF sécurisés et signés
                    électroniquement
                  </b>{" "}
                  pour la transmission aux personnes habilitées (Délégués du
                  personnel, organismes sociaux …)
                </div>
              </li>
              <li className="media">
                <i className="fas fa-square" />
                <div className="media-body ">
                  Pilotage et analyse des effectifs par établissements au moyen
                  de l’outil statistiques
                </div>
              </li>
            </ul>
          </div>
          {/* end of col */}
        </div>

        {/* end of row */}
      </div>
      {/* end of container */}
    </div>
  );
}
