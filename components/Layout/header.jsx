import React from "react";
import Image from "next/image";
import HeaderImage from "../../public/header.png";
import Link from "next/link";

export default function header() {
  return (
    <React.Fragment>
      <header id="header" className="header">
        <div className="header-content">
          <div className="container-fluid ">
            <div className="d-flex flexDiv justify-content-center">
              <div className="text-container">
                <h3>DIGITALISEZ SIMPLEMENT VOS DONNEES RH !</h3>
                <p>
                  Vos trois registres sociaux des entreprises, ainsi que vos
                  dossiers de collaborateurs internes et externes à portée de
                  main !
                </p>
                <div className="d-flex flexDiv2 ">
                  <Link href="/register">
                    <a className="btn-solid-lg ">Se connecter</a>
                  </Link>

                  <a href="#hamzaDiv" className="btn-outline-lg page-scroll ">
                    En savoir plus
                  </a>
                </div>
              </div>{" "}
              {/* end of text-container */}
              <div className="image-container">
                <div className="img-wrapper">
                  <Image
                    unoptimized={true}
                    width="500px"
                    height="450px"
                    className="img-fluid-header"
                    src="/header.png"
                    alt="alternative"
                  />
                </div>{" "}
                {/* end of img-wrapper */}
              </div>{" "}
              {/* end of image-container */}
            </div>
            {/* end of col */}
            {/* end of row */}
          </div>{" "}
          {/* end of container */}
        </div>{" "}
        {/* end of header-content */}
      </header>
    </React.Fragment>
  );
}
