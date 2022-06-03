import React from "react";
import Common from "./Common";

function About() {
  return (
    <div className="about">
      <Common
        name="Welcome to About page"
        btnname="Contact-us"
        imgsrc="./imges/AboutUs.jpg "
        navelink="contact"
      />
    </div>
  );
}

export default About;
