import React from "react";
import Image from "next/image";
import Link from "next/link";

import DescImage1 from "../../../public/landingPage/images/colas-logo.png";
import DescImage2 from "../../../public/landingPage/images/social-image.jpeg";
import DescImage3 from "../../../public/landingPage/images/description-3.png";
export default function section11(props) {
  return (
    <div id="clients">
       
      <div id="features" className="cards-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-sm-12">
                  <h2
                    className="h2-heading"
                    style={{ width: "100%", paddingBottom: "20px" }}
                  >
                    Nos Clients
                  </h2>
                </div>{" "}
                {/* end of col */}
              </div>{" "}
              {/* end of row */}
              <div className="cards-wrapper ">
                <div className="overlay-btn">
                  <Link href="/clients">
                    <a
                      className="btn-solid-reg"
                     
                    >
                     Découvrir nos clients
                  </a>
                  </Link>
                  </div>
                  <div className="row " >
                {[DescImage1, DescImage2].map((row) => (
                  <div className="col-lg-2" key={row}>
                    {/* Card */}
                    <div className="card">
                      <div className="card-image">
                        <Image
                          className="img-fluid"
                          src={row}
                          alt="alternative"
                        />
                      </div>
                    </div>
                  </div>
                ))}

                {/* end of col */}
                </div>{" "}
              
              
                </div>
              {/* end of row */}
            </div>{" "}
            {/* end of container */}
          </div>{" "}
          {/* end of cards-1 */}
        </div>
      </div>
    </div>
  );
}
