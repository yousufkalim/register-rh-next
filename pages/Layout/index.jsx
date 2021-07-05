import React from "react";
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
import Script from "next/script";
export default function index() {
  return (
    <div>
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
      {/* Footer */}
      <Footer />
    </div>
  );
}
