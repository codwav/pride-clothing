import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const Section2 = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <div className="wrap">
          <Grid item xs={12} sm={8} md={6}>
            <div className="section-img">
              <img src={require("../images/mockupred-t-shirt.png")} />
            </div>
          </Grid>
          <Grid>
            <div className="section2-content">
              <h1>Design Your Own T-Shirt</h1>
              <p>
                lorem It is a long established fact that a reader will be
                distracted by the readable content of a page when looking at its
                layout. The point of using Lorem Ipsum is that it has a
                more-or-less normal distribution of letters,lorem It is a long
                established fact that a reader will be distracted by the
                readable content of a page when looking at its layout.
              </p>
              <Button className="section2-btn" variant="outlined" size="large">
                Design Your T-Shirt
              </Button>
            </div>
          </Grid>
        </div>
      </Grid>
    </div>
  );
};

export default Section2;
