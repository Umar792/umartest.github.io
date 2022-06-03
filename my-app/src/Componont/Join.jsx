import React from "react";
import { NavLink } from "react-router-dom";

function Join() {
  return (
    <>
      <div className="join-heading">
        <h1>Registration Form</h1>
      </div>
      <div className="join-body">
        <div className="join-body-1">
          <h2> Have an account?</h2>
          <NavLink to="login"> Login</NavLink>
        </div>
        <br />
        <hr />
        <div className="join-body-2">
          <h2>Create new account</h2>
          <NavLink to="register"> Registration</NavLink>
        </div>
      </div>
    </>
  );
}

export default Join;
