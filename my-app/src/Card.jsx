import React from "react";
import { NavLink } from "react-router-dom";

function Card(props) {
  return (
    <>
      <div className="main-card">
        <div className="card-img">
          <img src={props.imgsrc} />
        </div>
        <div className="card-body">
          <h3 className="card-title">{props.title}</h3>
          <p> Hi, you can easily learn web development in just 1 year</p>
          <NavLink to="#"> Go somewhere </NavLink>
        </div>
      </div>
    </>
  );
}

export default Card;
