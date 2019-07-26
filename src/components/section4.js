import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const Section4 = () => {
  return (
    <div>
      <Grid container justify="center">
        <div className="products">
          <div className="tab1">
            <img src={require("../images/icon/polo-shirt.svg")} />
            <span className="tab-text">T-Shirt</span>
          </div>
          <div className="tab2">
            <img src={require("../images/icon/coffee-cup.svg")} />
            <span className="tab-text">Coffee Cup</span>
          </div>
          <div className="tab3">
            <img src={require("../images/icon/shopping-bag.svg")} />
            <span className="tab-text">Shopping Bag</span>
          </div>
          <div className="tab4">
            <img src={require("../images/icon/perfume.svg")} />
            <span className="tab-text">Perfume</span>
          </div>
          <div className="img-box">
            <div className="product-images">
              <div className="image">
                <img src={require("../images/hoodie.jpg")} />
                <div className="content">
                  <Button variant="contained" color="secondary" size="large">
                    Customize
                  </Button>
                </div>
              </div>
              <div className="img-hover" />
              <div className="image">
                <img src={require("../images/blacky.jpg")} />
                <div className="content">
                  <Button variant="contained" color="secondary" size="large">
                    Customize
                  </Button>
                </div>
              </div>
              <div className="image">
                <img src={require("../images/t-shirt.png")} />
                <div className="content">
                  <Button variant="contained" color="secondary" size="large">
                    Customize
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default Section4;
