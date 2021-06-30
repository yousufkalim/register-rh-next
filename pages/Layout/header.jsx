import React from "react";
import Image from "next/image";
import SoftwearImage from "../../public/landingPage/images/header-software-app.png";

export default function header() {
  return (
    <React.Fragment>
      <header id="header" className="header">
        <div className="header-content">
          <div className="container ">
            <div className="row ">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to={0}
                    className="active"
                  />
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to={1}
                  />
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to={2}
                  />
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row ">
                      <div className="col-lg-6 col-xl-5">
                        <div className="text-container">
                          <h3 className="text-white">
                            Zoom sur le registre unique du personnel
                          </h3>
                          <p className="p-large " style={{ opacity: "0.8" }}>
                            Tout employeur se doit de tenir à jour son registre
                            unique du personnel (Article L1221-13 du Code du
                            Travail).
                          </p>
                          <p>
                            <a href="#personal">En savoir plus...</a>
                          </p>
                          <a
                            className="btn-solid-lg page-scroll isDisabled"
                            asp-area="Identity"
                            asp-page="/Account/Register"
                          >
                            S&apos;inscrire
                          </a>
                        </div>{" "}
                        {/* end of text-container */}
                      </div>{" "}
                      {/* end of col */}
                      <div className="col-lg-6 col-xl-7">
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
                        {/* end of image-container */}
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-lg-6 col-xl-5">
                        <div className="text-container">
                          <h3 className="text-white">
                            Zoom sur le document unique d’évaluation des risques
                            (DUER)
                          </h3>
                          <p className="p-large " style={{ opacity: "0.8" }}>
                            Le document unique d&apos;évaluation des risques
                            (DUER) liste les risques professionnels encourus par
                            les travailleurs et les actions de prévention et de
                            protection qui sont menées dans l&apos;entreprise.
                          </p>
                          <p>
                            <a href="#singleRisk">En savoir plus...</a>
                          </p>
                          <a
                            className="btn-solid-lg page-scroll isDisabled"
                            asp-area="Identity"
                            asp-page="/Account/Register"
                          >
                            S&apos;inscrire
                          </a>
                        </div>{" "}
                        {/* end of text-container */}
                      </div>{" "}
                      {/* end of col */}
                      <div className="col-lg-6 col-xl-7">
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
                        {/* end of image-container */}
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-lg-6 col-xl-5">
                        <div className="text-container">
                          <h3 className="text-white">
                            Zoom sur le registre de sécurité
                          </h3>
                          <p className="p-large " style={{ opacity: "0.8" }}>
                            Les règles de santé et de sécurité au travail
                            relatives au registre de sécurité réglementation
                            pour les ERT (Etablissements Recevant des
                            Travailleurs) et pour le personnel travaillant en
                            ERP relèvent du Code du Travail (CT).
                          </p>
                          <p>
                            <a href="#security">En savoir plus...</a>
                          </p>
                          <a
                            className="btn-solid-lg page-scroll isDisabled"
                            asp-area="Identity"
                            asp-page="/Account/Register"
                          >
                            S&apos;inscrire
                          </a>
                        </div>{" "}
                        {/* end of text-container */}
                      </div>{" "}
                      {/* end of col */}
                      <div className="col-lg-6 col-xl-7">
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
                        {/* end of image-container */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              {/* end of col */}
            </div>{" "}
            {/* end of row */}
          </div>{" "}
          {/* end of container */}
        </div>{" "}
        {/* end of header-content */}
      </header>
    </React.Fragment>
  );
}
