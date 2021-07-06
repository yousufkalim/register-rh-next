import React from "react";
import Link from "next/link";
export default function subheader(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        <div className="container">
          <Link href="/">
            <a
              className="navbar-brand logo-image"
              style={{ textDecoration: "none" }}
            >
              RegisterRh
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
        </div>{" "}
        {/* end of container */}
      </nav>{" "}
      <header id="header" className="ex-header">
        <div className="container">
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
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumbs">
                <Link href="/">Home</Link>
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
