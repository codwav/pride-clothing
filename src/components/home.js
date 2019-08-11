import React, { Component } from "react";
import "./../css/style.scss";
import { Button } from "@material-ui/core";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col s12 l6">
              <div className="home-content">
                <h1>T-Shirts Designing</h1>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters.
                </p>
                <Button
                  className="home-btn"
                  variant="outlined"
                  color="secondary"
                  size="large"
                >
                  Customise Now
                </Button>
                <div className="social-links">
                  <a className="social-btn" href="#">
                    <img
                      src={require("../images/icon/facebook.svg")}
                      alt="facebook"
                    />
                  </a>
                  <a className="social-btn" href="#">
                    <img
                      src={require("../images/icon/twitter.svg")}
                      alt="facebook"
                    />
                  </a>
                  <a className="social-btn" href="#">
                    <img
                      src={require("../images/icon/linkedin.svg")}
                      alt="facebook"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col s12 l6">
              <div className="bg-image">
                <img
                  className="home-img"
                  src={require("../images/background.jpg")}
                  alt="bg"
                />
              </div>
            </div>
          </div>
        </div>
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
    );
  }
}

export default Home;
