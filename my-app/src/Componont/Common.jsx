import React from "react";
import { NavLink } from "react-router-dom";

function Common(props) {
  return (
    <>
      <div className="home-content">
        <div className="home-part1">
          <h1>
            {props.name}
            <strong className="home-logo"> Umar Technical</strong>
          </h1>
          <p> We are the team of talented developer making website</p>
          <NavLink to={props.navelink} className="btn">
            {props.btnname}
          </NavLink>
        </div>
        <div className="home-part2">
          <img src={props.imgsrc} alt="img" className={props.style} />
        </div>
      </div>
    </>
  );
}

export default Common;
