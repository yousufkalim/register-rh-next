import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
} from "reactstrap";

import SubHeader from "./Layout/subheader";
import Footer from "./Layout/footer";
import Sub_Section from "./Layout/sections/sub_section";

export default function Contact() {
  return (
    <>
      <SubHeader
        content="Contactez-nous
"
      />

      <div id="contact" className="basic-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="text-left">
                <i className="fa fa-info-circle" /> Informations
              </h2>
              <div className="leftDiv">
                <Card>
                  <div className="d-flex align-items-center">
                    <div className="div1">
                      <i
                        className="fa fa-location-arrow"
                        aria-hidden="true"
                      ></i>
                    </div>

                    <div className="div2">
                      <CardBody>
                        <CardTitle tag="p">Adresse</CardTitle>
                        <CardSubtitle tag="small" className="mb-2 text-muted">
                          3 rue Neuve Saint-Germain
                        </CardSubtitle>
                        <CardBody tag="small" className="mb-2 text-muted">
                          92100 Boulogne-Billancourt
                        </CardBody>
                      </CardBody>
                    </div>
                  </div>
                </Card>
                <Card>
                  <div className="d-flex align-items-center">
                    <div className="div1">
                      <i className="fa fa-phone" aria-hidden="true"></i>
                    </div>
                    <div className="div2">
                      <CardBody>
                        <CardTitle tag="p">Telephone</CardTitle>
                        <CardSubtitle tag="p" className="mb-2 text-muted">
                          06 21 50 40 35
                        </CardSubtitle>
                      </CardBody>
                    </div>
                  </div>
                </Card>
                <Card>
                  <div className="d-flex align-items-center">
                    <div className="div1">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                    </div>
                    <div className="div2">
                      <CardBody>
                        <CardTitle tag="p">Mail</CardTitle>
                        <a href="mailto:contact@registre-rh.fr">
                          <CardSubtitle tag="p" className=" text-muted">
                            contact@registre-rh.fr
                          </CardSubtitle>
                        </a>
                      </CardBody>
                    </div>
                  </div>
                </Card>
                <Card>
                  <div className="d-flex align-items-center">
                    <div className="div1">
                      <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                    </div>
                    <div className="div2">
                      <CardBody>
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href="https://www.linkedin.com/company/registre-rh/"
                        >
                          <CardTitle tag="p">Réseaux</CardTitle>
                        </a>
                      </CardBody>
                    </div>
                  </div>
                </Card>
              </div>
            
            </div>
            <div className="col-lg-6 ">
              <h2 className="text-left">
                <i className="fa fa-question-circle" /> Contactez-nous!
              </h2>
              <div className="form-container rightDiv ">
                <form>
                  <div className="form-group mx-sm-3 ">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Nom "
                    />
                  </div>
                  <div className="form-group mx-sm-3 ">
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      id="exampleInputPassword1"
                      placeholder="Adresse mail"
                    />
                  </div>
                  <div className="form-group mx-sm-3 ">
                    <textarea
                      className="form-control form-control-lg"
                      id="exampleFormControlTextarea1"
                      rows={3}
                      placeholder="Message"
                      defaultValue={""}
                    />
                  </div>
                  <div className="d-flex checkbox mx-sm-3 ">
                    <div className="checkbox">
                  <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                   </div>
                    <p>
                    En soumettant ce formulaire, vous acceptez que les
                    informations saisies soient utilisées, exploitées, traitées
                    pour permettre de vous recontacter.Pour plus
                    d&apos;informations, consultez notre{" "}
                    <a>politique de confidentialité</a> et les{" "}
                    <a>termes et conditions.</a>
                    </p>
                  </div>
                  <div className="mx-sm-3">
                    <button
                      type="submit"
                      className="btn-solid-lg"
                    >
                      Envoyer
                    </button>
                  </div>
             
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      <Footer />
    </>
  );
}
