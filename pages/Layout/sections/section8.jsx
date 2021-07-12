import React from "react";
import Link from "next/link";

export default function section8() {
  return (
    <div id="pricing" className="cards-2">
      <div className="container">
        <div className="row">
          <div className="row col-lg-12 ">
            <h2 className="h2-heading">
              <span>
                <i className="fas fa-euro-sign" />
              </span>
              Nos tarifs
            </h2>
          </div>
          {/* end of col */}
        </div>
        {/* end of row */}
        <div className="row">
          <div className="col-lg-12">
            {/* Card*/}
            <div className="card">
              <div className="card-body">
                <div className="card-headers">
                  <div className="card-title">ESSAI</div>
                  <div className="price">
                    <span className="value">Gratuit</span>
                  </div>
                  <div className="frequency">14 jours d&apos;essai</div>
                </div>
                <div className="divider" />
                <div className="header-card">
                  <ul className="list-unstyled li-space-lg">
                    <li className="media">
                      <i className="fas fa-check" />
                      <div className="media-body">
                        Registre unique du personnel
                        {/*(jusqu&apos;à 4 collaborateurs)*/}
                      </div>
                    </li>
                    <li className="media">
                      <i
                        className="fas fa-times"
                        style={{ color: "#6c757d" }}
                      />
                      <div className="media-body">
                        Document unique d’évaluation des risques professionnels
                      </div>
                    </li>
                    <li className="media">
                      <i
                        className="fas fa-times"
                        style={{ color: "#6c757d" }}
                      />
                      <div className="media-body">
                        Registre des contrôles de sécurité
                      </div>
                    </li>
                    <li className="media">
                      <i
                        className="fas fa-times"
                        style={{ color: "#6c757d" }}
                      />
                      <div className="media-body">Mode On Premise</div>
                    </li>
                    <li className="media">
                      <i
                        className="fas fa-times"
                        style={{ color: "#6c757d" }}
                      />
                      <div className="media-body">Connexion en SSO</div>
                    </li>
                  </ul>
                  <div className="button-wrapper">
                     <Link href="/Register">
                       <span className="btn-solid-reg page-scroll isDisabled"> Essayer</span>
                      </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* end of card */}
            {/* end of card */}
            {/* Card*/}
            <div className="card">
              <div className="card-body">
                <div className="card-headers">
                  <div className="card-title">EN MODE SaaS</div>
                  <div className="price">
                    <span className="value">Sur devis</span>
                  </div>
                  <div className="frequency">Paiement mensuel</div>
                </div>
                <div className="divider" />
                <div className="header-card">
                  <ul className="list-unstyled li-space-lg">
                    <li className="media">
                      <i className="fas fa-check" />
                      <div className="media-body">
                        Registre unique du personnel
                      </div>
                    </li>
                    <li className="media">
                      <i className="fas fa-check" />
                      <div className="media-body">
                        Document unique d’évaluation des risques professionnels
                      </div>
                    </li>
                    <li className="media">
                      <i className="fas fa-check" />
                      <div className="media-body">
                        Registre des contrôles de sécurité
                      </div>
                    </li>
                    <li className="media">
                    <i className="fas fa-check" />

                      <div className="media-body">En mode SaaS</div>
                    </li>
                    <li className="media">
                      <i
                        className="fas fa-times"
                        style={{ color: "#6c757d" }}
                      />
                      <div className="media-body">Connexion en SSO</div>
                    </li>
                  </ul>
                  <div className="button-wrapper">
                      <Link href="/Register">
                       <span className="btn-solid-reg page-scroll isDisabled"> Souscrire</span>
                      </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* end of card */}
            {/* end of card */}
            {/* Card*/}
            <div className="card">
              <div className="card-body">
                <div className="card-headers">
                  <div className="card-title">ON PREMISE</div>
                  <div className="price">
                    <span className="value">Sur devis</span>
                  </div>
                  <div className="frequency">Paiement mensuel</div>
                </div>
                <div className="divider" />
                <div className="header-card">
                  <ul className="list-unstyled li-space-lg">
                    <li className="media">
                      <i className="fas fa-check" />
                      <div className="media-body">
                        Registre unique du personnel
                      </div>
                    </li>
                    <li className="media">
                      <i className="fas fa-check" />
                      <div className="media-body">
                        Document unique d’évaluation des risques professionnels
                      </div>
                    </li>
                    <li className="media">
                      <i className="fas fa-check" />
                      <div className="media-body">
                        Registre des contrôles de sécurité
                      </div>
                    </li>
                    <li className="media">
                      <i className="fas fa-check" />
                      <div className="media-body">Mode On Premise</div>
                    </li>
                    <li className="media">
                      <i className="fas fa-check" />
                      <div className="media-body">Connexion en SSO</div>
                    </li>
                  </ul>
                  <div className="button-wrapper">
                    <Link href="/Register">
                       <span className="btn-solid-reg page-scroll isDisabled"> Souscrire</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* end of card */}
            {/* end of card */}
          </div>
          {/* end of col */}
        </div>
        {/* end of row */}
      </div>
      {/* end of container */}
    </div>
  );
}
