import Footer from "./footer.jsx";
import Nav from "./nav.jsx";
import Header from "./header.jsx";
import Section1 from "./sections/section1.jsx";
import Section2 from "./sections/section2.jsx";

import Section3 from "./sections/section3.jsx";
import Section4 from "./sections/section4.jsx";

import Section5 from "./sections/section5.jsx";
import Section6 from "./sections/section6.jsx";

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
                    En poursuivant votre navigation sur ce site, vous acceptez
                    l&apos;utilisation de cookies afin d&apos;optimiser votre
                    navigation et réaliser des statistiques de suivis. Pour en
                    savoir plus, consultez
                  </p>
                  <Link href="/PrivacyPolicy">
                    <a className="link"> notre politique de confidentialité </a>
                  </Link>{" "}
                  <p>
                    Si vous refusez, vos informations de navigation ne seront
                    pas conservées lors de votre visite. Nous apposons un seul
                    cookie afin de mémoriser votre choix.
                  </p>
                  <div className="row">
                    <div className="closeDiv col-lg-12">
                      <button
                        onClick={Decline}
                        className="btn-solid-close float-right ml-3"
                      >
                        Refuser
                      </button>
                      <button
                        onClick={Accept}
                        className="btn-solid-lg float-right"
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
      {/* ZOOM SUR LES TROIS REGISTRES OBLIGATOIRES */}
      <Section1 />
      {/* LA DIGITALISATION DES REGISTRES SOCIAUX AFIN DE : */}
      <Section2 />
      {/* A QUI S’ADRESSE REGISTRE RH ? */}
      <Section3 />
      {/* LES AVANTAGES DE NOTRE SOLUTION : */}
      <Section4 />
      {/* Nos Clients */}
      <Section5 />
      {/* A PROPOS DE NOUS : */}
      <Section6 />
      {/* Footer */}
      <Footer />
    </div>
  );
}
