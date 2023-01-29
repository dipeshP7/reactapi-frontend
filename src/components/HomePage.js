import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="jumbotron">
      <p>
        <h1>React Fronted Example</h1>
        This is React frotend api example.
      </p>
      {/* <p><a href='/about'>About Us</a></p> */}
      <Link to="about" className="btn btn-primary">
        About Us
      </Link>
    </div>
  );
}

export default HomePage;
