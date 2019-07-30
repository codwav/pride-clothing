import React, { Component } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

export class Navbar extends Component {
  render() {
    return (
      <Grid container className="nav-menu">
        <nav className="navbar">
          <Link to="/">
            <img alt="Pride Clothing NZ home page" className="logo" src={require("../images/prideclothing-logo-6-2.jpg")} width="250" />
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
              <li>Our Work</li>
            </Link>
            <Link className="nav-text" to="/contact">
              <li>Contact Us</li>
            </Link>
          </ul>
          <Link className="nav-text primary-button" id="product-design-button">
            Product Design
          </Link>
        </nav>
      </Grid>
    );
  }
}

export default Navbar;
