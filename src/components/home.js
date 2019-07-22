import React, { Component } from "react";
import Navbar from "./navbar";
import "./../css/style.scss";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";

export class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Grid container spacing={3}>
          <Grid item sm={8} xs={12} md={6}>
            <div className="home-content">
              <h1 className="main-header">T-Shirts Designing</h1>
              <p style={{ marginLeft: "100px", textAlign: "center" }}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </p>
              <Button
                variant="outlined"
                color="secondary"
                style={{ alignItems: "left" }}
              >
                Customise Now
              </Button>
            </div>
          </Grid>
          <Grid item sm={8} xs={12} md={6}>
            <img
              src={require("../images/bg.png")}
              alt="bg"
              style={{
                height: "100vh",
                width: "100%"
              }}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Home;
