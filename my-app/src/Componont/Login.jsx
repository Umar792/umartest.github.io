import React, { useState } from "react";

function Login() {
  const [logindata, setlogindata] = useState({
    username: "",
    number: "",
    password: "",
  });
  const loginsubmit = (e) => {
    // e.preventDefault();
    alert(
      `welcome back ${logindata.username} your phone number is ${logindata.number} and your password is${logindata.password}`
    );
  };
  const loginonchange = (event) => {
    const { name, value } = event.target;
    setlogindata((predata) => {
      return {
        ...predata,
        [name]: value,
      };
    });
  };
  return (
    <>
      <div className="Heading">
        <h1>Login Form</h1>
      </div>

      <div className="login-form">
        <form onSubmit={loginsubmit}>
          <div>
            <input
              type="text"
              name="username"
              onChange={loginonchange}
              required
              value={logindata.username}
              placeholder="Enter your username"
            />
          </div>
          <div>
            <input
              type="number"
              name="number"
              onChange={loginonchange}
              required
              value={logindata.number}
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              onChange={loginonchange}
              required
              value={logindata.password}
              placeholder="Enter your phone password"
            />
          </div>
          <div>
            <button className="login-btn" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
