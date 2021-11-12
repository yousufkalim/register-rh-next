import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function subheader(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        <div className="container">
          <Link href="/">
            <a
              passHref
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
          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"></li>
              <li className="nav-item"></li>

              {/* end of dropdown menu */}
              <li className="nav-item"></li>
              <li className="nav-item"></li>
            </ul>
            <span className="nav-item">
              <Link href="/login">
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
      <header id="header" className="ex-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h1>{props.content}</h1>
            </div>{" "}
            {/* end of col */}
          </div>{" "}
          {/* end of row */}
        </div>{" "}
        {/* end of container */}
      </header>{" "}
      <div className="ex-basic-1">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumbs">
                <Link href="/">Accueil</Link>
                <i className="fa fa-angle-double-right" />
                <span>{props.content}</span>
              </div>{" "}
              {/* end of breadcrumbs */}
            </div>{" "}
            {/* end of col */}
          </div>{" "}
          {/* end of row */}
        </div>{" "}
        {/* end of container */}
      </div>{" "}
    </>
  );
}
