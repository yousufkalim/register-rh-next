import React, { useState, useEffect } from "react";
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
  let [contact, setContact] = useState({});
  let [success, setSuccess] = useState("");

  // Handle Input
  const handleInput = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  //Submit Handle
  function handleSubmit(e) {
    e.preventDefault();

    // Making Form Data
    var formData = new FormData();
    for (const property in contact) {
      formData.append(property, contact[property]);
    }
    formData.append("dateCreated", new Date().toLocaleString());
    formData.append("service_id", "default_service");
    formData.append("template_id", "template_ptdbgxc");
    formData.append("user_id", "user_aRNGKpfNbAkNMO5JkZrMI");

    // API Request to Email JS
    fetch("https://api.emailjs.com/api/v1.0/email/send-form", {
      method: "POST",
      body: formData,
    })
      .then(() => {
        // After Success
        setContact({ name: "", email: "", message: "" });
        setSuccess("Nous avons bien reçu votre message.");
      })
      .catch((err) => {
        console.log(err);
        setContact({ name: "", email: "", message: "" });
        setSuccess("Nous avons bien reçu votre message.");
      });
  }

  return (
    <>
      <SubHeader content="Contactez-nous" />

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
                        <br />
                        <CardSubtitle tag="small" className="mb-2 text-muted">
                          92100 Boulogne-Billancourt
                        </CardSubtitle>
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
                      <CardTitle tag="p">Réseaux</CardTitle>
                      <CardBody>
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href="https://www.linkedin.com/company/registre-rh/"
                        >
                          <CardSubtitle tag="p">Registre-RH</CardSubtitle>
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
                <form onSubmit={handleSubmit}>
                  <div className="form-group mx-sm-3 ">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Nom "
                      name="name"
                      value={contact.name}
                      onChange={handleInput}
                      required
                    />
                  </div>
                  <div className="form-group mx-sm-3 ">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      id="exampleInputPassword1"
                      placeholder="Email"
                      name="email"
                      value={contact.email}
                      onChange={handleInput}
                      required
                    />
                  </div>
                  <div className="form-group mx-sm-3 ">
                    <textarea
                      className="form-control form-control-lg"
                      id="exampleFormControlTextarea1"
                      rows={3}
                      placeholder="Message"
                      defaultValue={""}
                      name="message"
                      value={contact.message}
                      onChange={handleInput}
                      required
                    />
                    {success && (
                      <p
                        style={{
                          backgroundColor: "#152f68",
                          color: "#fff",
                          borderRadius: "5px",
                          padding: "5px 10px",
                          width: "100%",
                          marginTop: "10px",
                          marginRight: "auto",
                          marginLeft: "auto",
                        }}
                      >
                        {success}
                      </p>
                    )}
                  </div>

                  <div className="d-flex checkbox mx-sm-3 ">
                    <div className="checkbox">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                      />
                    </div>
                    <p>
                      En soumettant ce formulaire, vous acceptez que les
                      informations saisies soient utilisées, exploitées,
                      traitées pour permettre de vous recontacter.Pour plus
                      d&apos;informations, consultez notre{" "}
                      <a>politique de confidentialité</a> et les{" "}
                      <a>termes et conditions.</a>
                    </p>
                  </div>

                  <div className="mx-sm-3">
                    <button type="submit" className="btn-solid-lg">
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
