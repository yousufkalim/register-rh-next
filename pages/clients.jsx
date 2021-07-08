import React from "react";

import Image from "next/image";
import Link from "next/link";
import DescImage1 from "../public/landingPage/images/social-image.jpeg";
import DescImage2 from "../public/landingPage/images/colas-logo.png";

import SubHeader from "./Layout/subheader";
import Footer from "./Layout/footer";

export default function Clients() {
  return (
    <>
      <SubHeader content="Clients" />

      <div id="clientdesc" className="basic-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="left_col">
                <p className="">NOS MERVEILLEUX CLIENTS</p>
                <h3>Ils nous font confiance</h3>
                <p>
                  Nous avons aidé nos clients à passer à l&apos;étape
                  d&apos;après en faisant de leurs enjeux RH un vrai levier de
                  croissance.
                </p>
              </div>
            </div>
            <div className="col-lg-8 ">
              <h3 className="text-left">
                <i className="fa fa-question-circle" /> Contactez-nous!
              </h3>
              <div className="form-container pt-2">
                <div className="row  ">
                  {[DescImage1, DescImage2].map((row) => (
                    <div className="col-lg-3 pt-2" key={row}>
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
            </div>
          </div>
        </div>
      </div>
      <div className="ex-basic-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Link href="/">
                <a className="btn-solid-reg">Retour</a>
              </Link>
              {/* end of breadcrumbs */}
            </div>{" "}
            {/* end of col */}
          </div>{" "}
          {/* end of row */}
        </div>{" "}
        {/* end of container */}
      </div>
      <Footer />
    </>
  );
}
