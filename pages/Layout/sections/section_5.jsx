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
                  <h2
                    className="h2-heading"
                  >
                    ILS ONT DEJA REJOINT LA PLATEFORME : 
                  </h2>
                </div>{" "}
                {/* end of col */}
              </div>{" "}
              {/* end of row */}
              <div className="row">
            <div className="col-lg-12">
              <div className="cards-wrapper ">
                <div className="overlay-btn">
                  <Link href="/clients">
                    <a className="btn-solid-lg">Découvrir nos clients</a>
                  </Link>
                </div>
                <div  className="d-flex justify-content-center">
                  {[DescImage1].map((row) => (
                    <div className="mr-2 " key={row}>
                      {/* Card */}
                      <div className="card" >
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
</div>
</div>


      
          {/* end of cards-1 */}
        </div>
      </div>
    </div>
  );
}
