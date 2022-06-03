import React from "react";
import { NavLink } from "react-router-dom";

function Navebar() {
  return (
    <>
      <div className="nave">
        <div className="logo">Coding with Umar</div>
        <div className="menus">
          <NavLink to="/" exact activeClassName="active-menu">
            Home
          </NavLink>
          <NavLink to="about" exact activeClassName="active-menu">
            About-Us
          </NavLink>
          <NavLink to="Service" exact activeClassName="active-menu">
            Services
          </NavLink>
          <NavLink to="contact" exact activeClassName="active-menu">
            Contact
          </NavLink>
          <NavLink
            to="join"
            exact
            activeClassName="active-menu"
            className="join"
          >
            join Now
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navebar;
