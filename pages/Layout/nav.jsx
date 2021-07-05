import React from "react";
import Link from "next/link";
export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
      <div className="container">
        <a
          className="navbar-brand logo-image"
          style={{ textDecoration: "none" }}
        >
          Registre RH
        </a>
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
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#header">
                Accueil<span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#features">
                L&apos;application
              </a>
            </li>
            {/* Dropdown Menu */}
            <li className="nav-item dropdown">
              <a
                className=" nav-link dropdown-toggle page-scroll"
                id="navbarDropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Registres sociaux obligatoires
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item page-scroll" href="#personal">
                  <span className="item-text">
                    Registre unique du personnel
                  </span>
                </a>
                <div className="dropdown-items-divide-hr" />
                <a className="dropdown-item page-scroll" href="#singleRisk">
                  <span className="item-text">
                    Document unique d’évaluation des risques
                  </span>
                </a>
                <div className="dropdown-items-divide-hr" />
                <a className="dropdown-item page-scroll" href="#security">
                  <span className="item-text">
                    Registre des contrôles de sécurité
                  </span>
                </a>
              </div>
            </li>
            {/* end of dropdown menu */}
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#pricing">
                Tarifs
              </a>
            </li>
            <li className="nav-item">
              <Link href="/Contact">
                <a className="nav-link ">Contact Us</a>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#about">
                A propos
              </a>
            </li>
          </ul>
          <span className="nav-item">
            <Link href="/Login">
              <span className="btn-outline-sm ">Se connecter</span>
            </Link>
          </span>
          <a
            href="https://www.linkedin.com/company/registre-rh/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-item"
          >
            <i
              className="fab fa-linkedin fa-2x ml-3"
              style={{ color: "#fff" }}
            />
          </a>
        </div>
      </div>{" "}
      {/* end of container */}
    </nav>
  );
}
