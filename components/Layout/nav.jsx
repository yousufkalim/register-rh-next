import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
      <div className="container">
        <Link href="/">
          <a
            className="navbar-brand logo-image"
            style={{ textDecoration: "none" }}
          >
            <Image
              unoptimized={true}
              width="100%"
              height="100%"
              className="img"
              src="/logo.png"
              alt="logo"
            />
          </a>
        </Link>
        {/* Mobile Menu Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-awesome fas fa-bars" />
          <span className="navbar-toggler-awesome fas fa-times" />
        </button>
        {/* end of mobile menu toggle button */}
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarsExampleDefault"
        >
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#zoomfeatures">
                Registres sociaux obligatoires
              </a>
            </li>
            <li className="nav-item">
              <Link href="/tarifs">
                <a className="nav-link ">Tarifs</a>
              </Link>
            </li>

            {/* end of dropdown menu */}
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#propose">
                A propos
              </a>
            </li>
            <li className="nav-item">
              <Link href="/contact">
                <a className="nav-link ">Contactez-nous</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/faq">
                <a className="nav-link ">Faq</a>
              </Link>
            </li>
          </ul>
          <span id="seconnector" className="nav-item">
            <Link href="/login" passHref>
              <span className="btn-outline-sm ">Se connecter</span>
            </Link>
          </span>
        </div>
        <span id="seconnector2" className="nav-item">
          <Link href="/login" passHref>
            <span className="btn-outline-sm ">Se connecter</span>
          </Link>
        </span>
      </div>{" "}
      {/* end of container */}
    </nav>
  );
}
