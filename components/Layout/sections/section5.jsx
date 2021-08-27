import React from "react";
import Image from "next/image";
import Link from "next/link";

import DescImage1 from "../../../public/landingPage/images/colas-logo.png";
import DescImage2 from "../../../public/landingPage/images/social-image.jpeg";
import DescImage3 from "../../../public/landingPage/images/description-3.png";
export default function section5(props) {
  return (
    <div id="clients">
      <div id="features" className="basic-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <h2 className="h2-heading">
                ILS ONT DEJA REJOINT LA PLATEFORME :
              </h2>
            </div>{" "}
            {/* end of col */}
          </div>{" "}
          {/* end of row */}
          <div className="row">
            <div className="col-lg-12">
              <div className="cards-wrapper ">
                <div className="d-flex justify-content-center position-relative">
                  <div className="overlay-btn">
                    <div className="overlay-btn-content">
                      <Link href="/clients">
                        <a className="btn-solid-lg">Découvrir nos clients</a>
                      </Link>
                    </div>
                  </div>
                  {[DescImage1].map((row) => (
                    <div className="card" key={row}>
                      <div className="card-image d-flex justify-content-center">
                        <Image
                          unoptimized={true}
                          height="200px"
                          width="150px"
                          className="img-fluid"
                          src={row}
                          alt="alternative"
                        />
                      </div>
                    </div>
                  ))}

                  {/* end of col */}
                </div>{" "}
              </div>
            </div>
          </div>
          {/* end of cards-1 */}
        </div>
      </div>
    </div>
  );
}
