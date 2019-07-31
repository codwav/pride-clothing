import React, { Component } from "react";
import Navbar from "./navbar";
import "./../css/style.scss";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";
import Footer from "./footer";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Grid container spacing={1}>
          <div className="container">
            <Grid item sm={8} xs={12} md={6}>
              <div className="home-content">
                <h1>T-Shirts Designing</h1>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters.
                </p>
                <Button variant="outlined" size="large" color="secondary">
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
            </Grid>
            <Grid item xs={12} sm={12} md={10} lg={6}>
              <div className="bg-image">
                <img
                  className="home-img"
                  src={require("../images/bg.png")}
                  alt="bg"
                />
              </div>
            </Grid>
          </div>
        </Grid>
        <Section2 />
        <Section3 />
        <Section4 />
        <Footer />
      </div>
    );
  }
}

export default Home;
