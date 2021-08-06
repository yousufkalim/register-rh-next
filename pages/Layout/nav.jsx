import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from '../../public/logo.png'
export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
      <div className="container">
        <Link href="/">
          <a
            className="navbar-brand logo-image"
            style={{ textDecoration: "none" }}
          >
            <Image className="img" src={Logo} alt="logo"/>
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
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#header">
              Registres sociaux obligatoires 
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#features">
              Tarifs
              </a>
            </li>
            
            {/* end of dropdown menu */}
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#propose">
              A propos
              </a>
            </li>
            <li className="nav-item">
              <Link href="/Contact">
                <a className="nav-link ">Contactez-nous</a>
              </Link>
            </li>
           
          </ul>
          <span className="nav-item">
            <Link href="/Login">
              <span className="btn-outline-sm ">Se connecter</span>
            </Link>
          </span>
          {/* <a
            href="https://www.linkedin.com/company/registre-rh/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-item"
          >
            <i
              className="fab fa-linkedin fa-2x ml-3"
             
            />
          </a> */}
        </div>
      </div>{" "}
      {/* end of container */}
    </nav>
  );
}
