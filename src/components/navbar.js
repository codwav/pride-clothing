import React, { Component } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

export class Navbar extends Component {
  state = {
    scrolled: false
  };

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop !== true) {
        this.setState({
          scrolled: true
        });
      } else
        this.setState({
          scrolled: false
        });
    });
  }

  //   componentWillMount() {
  //     window.removeEventListener("scroll");
  //   }

  render() {
    return (
      <Grid container>
        <div className={this.state.scrolled ? "navbar scrolled" : "navbar"}>
          <Link to="/">
            <img
              alt="Pride Clothing NZ home page"
              className="logo"
              src={require("../images/prideclothing-logo-6-2.jpg")}
              width="250"
            />
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
        </div>
      </Grid>
    );
  }
}

export default Navbar;
