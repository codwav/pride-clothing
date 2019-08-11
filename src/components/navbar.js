import React, { Component } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

export class Navbar extends Component {
  state = {
    scrolled: false,
    active: false
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

  toggleClass = () => {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  };

  // componentWillUnmount() {
  //   window.removeEventListener("scroll");
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("active");
  // }

  render() {
    return (
      <div>
        <div className="toggle">
          <img
            alt="Pride Clothing NZ home page"
            className="toggle-logo"
            src={require("../images/prideclothing-logo-6-2.jpg")}
          />
          <div class="menu" onClick={this.toggleClass}>
            <i className="fas fa-bars" aria-hidden="true" />
          </div>
        </div>
        <div
          className={
            this.state.active || this.state.scrolled
              ? "navbar scrolled active"
              : "navbar"
          }
        >
          <Link to="/">
            <img
              alt="Pride Clothing NZ home page"
              className="logo"
              src={require("../images/prideclothing-logo-6-2.jpg")}
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
          <Link className="primary-button" id="product-design-button">
            Product Design
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
