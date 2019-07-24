import React, { Component } from "react";
import Navbar from "./navbar";
import "./../css/style.scss";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Grid className="home" container spacing={2}>
          <Grid item sm={8} xs={12} md={4}>
            <div className="home-content">
              <h1>T-Shirts Designing</h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
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
          <Grid>
            <div className="bg-image">
              <img
                className="home-img"
                src={require("../images/bg.png")}
                alt="bg"
              />
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Home;
