import React from "react";
import Link from "next/link";
export default function footer() {
  return (
    <>
      <div className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="footer-col first">
                <h4>À Propos</h4>
                <p className="p-small">
                  Nous sommes spécialisés dans les solutions RH digitales
                  interopérables avec les différents CRM, ERP et autres.
                </p>
              </div>
            </div>{" "}
            {/* end of col */}
            <div className="col-md-4">
              <div className="footer-col middle">
                <h4>Liens importants</h4>
                <ul className="list-unstyled li-space-lg p-small">
                  <li className="media">
                    <i className="fas fa-square" />
                    <div className="media-body">
                      Consultez nos{" "}
                      <Link href="/terms">
                        <a className="white">Termes et conditions</a>
                      </Link>
                    </div>
                  </li>
                  <li className="media">
                    <i className="fas fa-square" />
                    <div className="media-body">
                      <Link href="/policy">
                        <a className="white">Politique de confidentialité</a>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>{" "}
            {/* end of col */}
            <div className="col-md-4">
              <div className="footer-col last">
                <h4>Contact</h4>
                <ul className="list-unstyled li-space-lg p-small">
                  <li className="media">
                    <i className="fas fa-map-marker-alt" />
                    <div className="media-body">
                      3 rue Neuve Saint-Germain 92100 Boulogne-Billancourt,
                      France
                    </div>
                  </li>
                  <li className="media">
                    <i className="fas fa-envelope" />
                    <div className="media-body">
                      <a className="white" href="mailto:contact@registre-rh.fr">
                        contact@registre-rh.fr
                      </a>
                      <br />
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
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="p-small">
                Copyright © 2020{" "}
                <a href="https://falconconsulting.fr">Falcon Consulting</a>
              </p>
            </div>{" "}
            {/* end of col */}
          </div>{" "}
          {/* enf of row */}
        </div>{" "}
        {/* end of container */}
      </div>
    </>
  );
}
