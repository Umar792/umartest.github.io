import React, { useState } from "react";

function Contact() {
  const [data, setdata] = useState({
    fullname: "",
    phone: "",
    email: "",
    password: "",
  });
  const submitdata = (e) => {
    e.preventDefault();
    alert(
      `Welcome ${data.fullname} your phone number is ${data.phone} and your email is ${data.email} and your password is ${data.password}`
    );
  };
  const inputChnger = (event) => {
    const { name, value } = event.target;
    setdata((predata) => {
      return {
        ...predata,
        [name]: value,
      };
    });
  };
  return (
    <>
      <div className="Heading">
        <h1>Contact Us</h1>
      </div>
      <h3 id="name"></h3>

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
              value={data.fullname}
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
              value={data.phone}
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
              value={data.email}
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
              value={data.password}
              onChange={inputChnger}
              id="password"
              placeholder="Enter Your password"
            />
          </div>
          <div>
            <div>
              <label for="message">Enter Your message</label>
            </div>
            <textarea
              className="textarea"
              rows=""
              colum=""
              placeholder="message"
              id="message"
            />
          </div>
          <div>
            <button className="btn" type="Submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Contact;
