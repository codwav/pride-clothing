import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/style.css";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Link to="/">
          <div className="logo" />
        </Link>
        <ul className="nav-links">
          <Link className="nav-text" to="/">
            <li>Home</li>
          </Link>
          <Link className="nav-text" to="/about">
            <li>About</li>
          </Link>
          <Link className="nav-text" to="/products">
            <li>Products</li>
          </Link>
          <Link className="nav-text" to="/ourwork">
            <li>OurWork</li>
          </Link>
          <Link className="nav-text" to="/contact">
            <li>Contact Us</li>
          </Link>
        </ul>
        <a href="#" className="nav-design_btn">
          Product Design
        </a>
      </nav>
    );
  }
}

export default Navbar;
