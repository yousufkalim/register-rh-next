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
            <div className="col-lg-4">
              <h2 className="text-left">
                <i className="fa fa-info-circle" /> Informations
              </h2>
              <div className="pt-2">
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
                        <CardTitle tag="p">
                          Adresse
                        </CardTitle>
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
              </div>
              <div className="pt-3">
                <Card>
                  <div className="d-flex align-items-center">
                    <div className="div1">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
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
              </div>
              <div className="pt-3">
                <Card>
                  <div className="d-flex align-items-center">
                    <div className="div1">
                      <i className="fa fa-phone" aria-hidden="true"></i>
                    </div>
                    <div className="div2">
                      <CardBody>
                        <CardTitle tag="p">Mail</CardTitle>
                        <a href="contact@registre-rh.fr">
                        <CardSubtitle tag="p" className="mb-2 text-muted">
                          contact@registre-rh.fr
                        </CardSubtitle>
                        </a>
                      </CardBody>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="pt-3">
                <Card>
                  <div className="lastDiv">
                    <p>
                      <b> Réseaux:</b>
                      <br />
                      <a href="https://www.linkedin.com/company/registre-rh/">
                        <i style={{color: "#555"}} className="fab fa-linkedin-in" aria-hidden="true"></i>
                      </a>
                    </p>
                  </div>
                </Card>
              </div>
            </div>
            <div className="col-lg-8 ">
              <h2 className="text-left">
                <i className="fa fa-question-circle" /> Contactez-nous!
              </h2>
              <div className="form-container pt-2 ">
                <form
                  id="privacyForm"
                  data-toggle="validator"
                  data-focus="false"
                >
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control-input"
                      id="pname"
                    />
                    <label className="label-control" htmlFor="pname">
                      Nom prénom
                    </label>
                    <div className="help-block with-errors" />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control-input"
                      id="pemail"
                    />
                    <label className="label-control" htmlFor="pemail">
                      Adresse mail
                    </label>
                    <div className="help-block with-errors" />
                  </div>
                  <div className="form-group">
                    <textarea
                      style={{ borderRadius: "4px" }}
                      className="form-control-input"
                      rows={4}
                      id="comment"
                      defaultValue={""}
                    />
                    <label className="label-control" htmlFor="pemail">
                      Message
                    </label>
                    <div className="help-block with-errors" />
                  </div>
                  <div className="form-group checkbox">
                    <input
                      type="checkbox"
                      id="pterms"
                      defaultValue="Agreed-to-Terms"
                    />
                    En soumettant ce formulaire, vous acceptez que les
                    informations saisies soient utilisées, exploitées, traitées
                    pour permettre de vous recontacter.Pour plus
                    d&apos;informations, consultez notre{" "}
                    <a>politique de confidentialité</a> et les{" "}
                    <a>termes et conditions.</a>
                    <div className="help-block with-errors" />
                  </div>
                  <div className="form-group text-center">
                    <button
                      type="submit"
                      className="form-control-submit-button"
                    >
                      Envoyer
                    </button>
                  </div>
                  <div className="form-message">
                    <div id="pmsgSubmit" className="h3 text-center hidden" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Sub_Section />
      <Footer />
    </>
  );
}
