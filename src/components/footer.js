import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Footer extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="footer">
            <div className="footer-section">
              <div className="footer-navbar">
                <div className="row">
                  <div className="col s12 md 8 l3">
                    <ul className="footer__nav-links">
                      <Link className="footer__nav-text" to="/">
                        <li>Home</li>
                      </Link>
                      <Link className="footer__nav-text" to="/about">
                        <li>About</li>
                      </Link>
                      <Link className="footer__nav-text" to="/products">
                        <li>Products</li>
                      </Link>
                      <Link className="footer__nav-text" to="/ourwork">
                        <li>OurWork</li>
                      </Link>
                      <Link className="footer__nav-text" to="/contact">
                        <li>Contact Us</li>
                      </Link>
                    </ul>
                  </div>
                  <div className="col s12 md 8 l3">
                    <ul className="footer__nav-links">
                      <Link className="footer__nav-text" to="/">
                        <li>Home</li>
                      </Link>
                      <Link className="footer__nav-text" to="/about">
                        <li>About</li>
                      </Link>
                      <Link className="footer__nav-text" to="/products">
                        <li>Products</li>
                      </Link>
                      <Link className="footer__nav-text" to="/ourwork">
                        <li>OurWork</li>
                      </Link>
                      <Link className="footer__nav-text" to="/contact">
                        <li>Contact Us</li>
                      </Link>
                    </ul>
                  </div>
                  <div className="col s12 m10 l6">
                    <div className="contact-info">
                      <h4>
                        Pride Lands Office: <br />
                        <span className="contact">
                          Top floor, 28 Hopper Street, Mount Cook, <br />
                          Wellington 6011.
                        </span>
                      </h4>
                      <h4>
                        Phone:{" "}
                        <span className="contact">
                          {" "}
                          (+64) 4 907 2225 -<br /> (+64) 4 920 1918 - (+64) 4
                          831 0316
                        </span>{" "}
                      </h4>
                      <h4>
                        Mobile: <span className="contact">027 567 8913</span>{" "}
                      </h4>
                      <h4>
                        Hours: <span className="contact">9am-2pm Mon-Fri</span>{" "}
                      </h4>
                      <h4>
                        Email:{" "}
                        <span className="contact">info@pridelands.org.nz</span>{" "}
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="footer-logo">
                  <span className="footer-copyright">
                    Copyright &copy; 2019 Pride Land Limited all rights reserved
                  </span>
                  <Link to="/">
                    <img
                      src={require("../images/prideclothing-logo-6-2.jpg")}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
