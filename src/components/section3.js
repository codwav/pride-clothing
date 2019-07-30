import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const Section3 = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <div className="wrap">
          <Grid item xs={12} sm={8} md={6}>
            <div className="section3-content">
              <h1>Easy to Edit</h1>
              <p>
                lorem It is a long established fact that a reader will be
                distracted by the readable content of a page when looking at its
                layout. The point of using Lorem Ipsum is that it has a
                more-or-less normal distribution of letters,lorem It is a long
                established fact that a reader will be distracted by the
                readable content of a page when looking at its layout.
              </p>
              <Button className="section3-btn" variant="outlined" size="large">
                Design Your Hoodie
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <div className="section3-img">
              <img
                className="hoodie-top__img"
                src={require("../images/Image1.png")}
                alt="image1"
              />
              <img src={require("../images/basic.png")} />
            </div>
          </Grid>
        </div>
      </Grid>
    </div>
  );
};

export default Section3;
