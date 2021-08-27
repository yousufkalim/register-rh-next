import React from "react";
import Link from "next/link";
export default function Sub_Section() {
  return (
    <div className="ex-basic-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Link href="/">
              <a className="btn-solid-reg">Retour</a>
            </Link>
            {/* end of breadcrumbs */}
          </div>{" "}
          {/* end of col */}
        </div>{" "}
        {/* end of row */}
      </div>{" "}
      {/* end of container */}
    </div>
  );
}
