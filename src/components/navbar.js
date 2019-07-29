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
          <Button variant="outlined" color="secondary">
            Product Design
          </Button>
        </nav>
      </Grid>
    );
  }
}

export default Navbar;
