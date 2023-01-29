import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const activeStyles = { color: "orange" };
  return (
    <>
      <NavLink to="/" exact activeStyle={activeStyles}>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/courses" activeStyle={activeStyles}>
        Courses
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={activeStyles}>
        About Us
      </NavLink>
    </>
  );
}

export default Header;
