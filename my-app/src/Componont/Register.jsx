import React, { useState } from "react";

function Register() {
  const [rdata, setrdata] = useState({
    fullname: "",
    phone: "",
    email: "",
    password: "",
  });
  const inputChnger = (event) => {
    const { name, value } = event.target;
    setrdata((predata) => {
      return {
        ...predata,
        [name]: value,
      };
    });
  };
  const submitdata = (e) => {
    e.preventDefault();
    document.getElementById(
      "data"
    ).innerHTML = `Welcome ${rdata.fullname} <br/> your phone number is ${rdata.phone}<br/> your email is ${rdata.email} <br/>and your pasword is ${rdata.password} thanks for registration`;
  };
  return (
    <div>
      <div className="Heading">
        <h1>Contact Us</h1>
      </div>
      <h3 id="data"></h3>

      <form onSubmit={submitdata}>
        <div className="contact-form">
          <div>
            <div>
              <label for="name">FullName</label>
            </div>
            <input
              type="text"
              name="fullname"
              required
              value={rdata.fullname}
              onChange={inputChnger}
              id="name"
              placeholder="Enter Your Name"
            />
          </div>
          <div>
            <div>
              <label for="name">phone</label>
            </div>
            <input
              type="number"
              name="phone"
              required
              value={rdata.phone}
              onChange={inputChnger}
              id="phone"
              placeholder="Enter Your Phone number"
            />
          </div>
          <div>
            <div>
              <label for="name">email adress</label>
            </div>
            <input
              type="email"
              name="email"
              required
              value={rdata.email}
              onChange={inputChnger}
              id="email"
              placeholder="Enter Your email"
            />
          </div>
          <div>
            <div>
              <label for="name">Password</label>
            </div>
            <input
              type="password"
              name="password"
              required
              value={rdata.password}
              onChange={inputChnger}
              id="password"
              placeholder="Enter Your password"
            />
          </div>

          <div>
            <button className="btn" type="Submit">
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
