import Footer from "./footer.jsx";
import Nav from "./nav.jsx";
import Header from "./header.jsx";
import Section1 from "./sections/section1.jsx";
import Section2 from "./sections/section2.jsx";
import Section3 from "./sections/section3.jsx";
import Section4 from "./sections/section4.jsx";
import Section5 from "./sections/section5.jsx";
import Section6 from "./sections/section6.jsx";
import Section7 from "./sections/section7.jsx";
import Section8 from "./sections/section8.jsx";
import Section9 from "./sections/section9.jsx";
import Section10 from "./sections/section10.jsx";
import Section11 from "./sections/section11.jsx";

import Script from "next/script";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Modal from "../../components/Modal";

export default function Index() {
  const [modal, setModal] = useState(true);
  useEffect(() => {
    let cookie = localStorage.getItem("cookie");
    if (cookie) {
      setModal(false);
    }
  }, []);
  const toggle = () => setModal(!modal);
  const Accept = () => {
    localStorage.setItem("cookie", true);
    setModal(false);
  };
  const Decline = () => {
    setModal(false);
  };
  return (
    <div>
      <div className="parentDiv">
        {modal && (
          <Modal
            size="xl"
            toggle={toggle}
            modal={modal}
            content={
              <>
                <div>
                  <p>
                    {" "}
                    Nous nous engageons à vous informer en cas de modification
                    substantielle des présentes CGU, de vos données de manière
                    substantielle sans vous en informer et obtenir votre
                    consentement.
                  </p>
                  <Link href="/PrivacyPolicy">
                    <a> notre politique de confidentialité </a>
                  </Link>{" "}
                  <p>
                    En aucun cas les engagements, définis au point ci-dessus,
                    relatifs à la notification en cas de
                  </p>
                  <div className="row">
                    <div className="col-lg-12">
                      <button
                        onClick={Decline}
                        className="btn btn-danger float-right ml-3"
                      >
                        Refuser
                      </button>
                      <button
                        onClick={Accept}
                        className="btn btn-primary float-right"
                      >
                        Accepter
                      </button>
                    </div>
                  </div>
                </div>
              </>
            }
          />
        )}
      </div>
      {/* Navbar */}
      <Nav />
      {/* Header */}
      <Header />
      {/* Qu’est-ce que l’application */}
      <Section1 />
      {/* À qui s’adresse */}
      <Section2 />
      {/* En synthèse « Registre Rh » c’est */}
      <Section3 />
      {/* Quels sont les 3 registres obligatoires proposés dans */}
      <Section4 />
      {/* Registre unique du personnel */}
      <Section5 />
      {/* Document unique d’évaluation des risques (DUER) */}
      <Section6 />
      {/*Registre des contrôles de sécurité  */}
      <Section7 />
      {/* Nos tarifs */}
      <Section8 />
      {/*  FAQ*/}
      <Section9 />
      {/*  À propos*/}
      <Section10 />
      <Section11 />
      {/* Footer */}
      <Footer />
    </div>
  );
}
