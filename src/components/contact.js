import React, { Component } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import "./../css/contact.scss";

export class Contact extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>Contact Us</h1>
          <h2>Office Location</h2>
          <div id="officeLocation">
            <iframe width="800" height="600" src="https://maps.google.com/maps?q=28%20Hopper%20Street%2C%20Mount%20Cook%2C%20Wellington%206011&t=&z=19&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
          </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;
