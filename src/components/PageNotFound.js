import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <h1>Page Not Found</h1>
      <p>
        <Link to="/" className="btn btn-primary">
          Back To Home
        </Link>
      </p>
    </>
  );
}

export default PageNotFound;
