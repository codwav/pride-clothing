import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const CustomTabs = ({ children }) => (
  <Tab>
    <h2 className="tab-text">{children}</h2>
  </Tab>
);

CustomTabs.tabsRole = "Tab";

class Section4 extends Component {
  render() {
    return (
      <div>
        <Grid container justify="center">
          <Tabs defaultIndex={0}>
            <TabList>
              <CustomTabs>
                <img
                  src={require("../images/icon/polo-shirt.svg")}
                  alt="t-shirt"
                />
                T-Shirt
              </CustomTabs>
              <CustomTabs>
                <img
                  src={require("../images/icon/coffee-cup.svg")}
                  alt="coffeeCup"
                />
                Coffee Cup
              </CustomTabs>
              <CustomTabs>
                <img
                  src={require("../images/icon/shopping-bag.svg")}
                  alt="shopping-bag"
                />
                Shopping Bag
              </CustomTabs>
              <CustomTabs>
                <img
                  src={require("../images/icon/perfume.svg")}
                  alt="perfume"
                />
                Perfume
              </CustomTabs>
            </TabList>
            <TabPanel>
              <div className="img-box">
                <div className="product-images">
                  <div className="image">
                    <img src={require("../images/hoodie.jpg")} />
                    <div className="content">
                      <Button
                        variant="contained"
                        size="large"
                        color="secondary"
                      >
                        Customize
                      </Button>
                    </div>
                  </div>
                  <div className="img-hover" />
                  <div className="image">
                    <img src={require("../images/blacky.jpg")} />
                    <div className="content">
                      <Button
                        variant="contained"
                        size="large"
                        color="secondary"
                      >
                        Customize
                      </Button>
                    </div>
                  </div>
                  <div className="image">
                    <img src={require("../images/t-shirt.png")} />
                    <div className="content">
                      <Button
                        variant="contained"
                        size="large"
                        color="secondary"
                      >
                        Customize
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="img-box">
                <div className="product-images">
                  <div className="image">
                    <img src={require("../images/coffee.jpg")} />
                    <div className="content">
                      <Button
                        variant="contained"
                        size="large"
                        color="secondary"
                      >
                        Customize
                      </Button>
                    </div>
                  </div>
                  <div className="img-hover" />
                  <div className="image">
                    <img src={require("../images/coffee.jpg")} />
                    <div className="content">
                      <Button
                        variant="contained"
                        size="large"
                        color="secondary"
                      >
                        Customize
                      </Button>
                    </div>
                  </div>
                  <div className="image">
                    <img src={require("../images/coffee.jpg")} />
                    <div className="content">
                      <Button
                        variant="contained"
                        size="large"
                        color="secondary"
                      >
                        Customize
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="img-box">
                <div className="product-images">
                  <div className="image">
                    <img src={require("../images/shoppyBag.jpg")} />
                    <div className="content">
                      <Button
                        variant="contained"
                        size="large"
                        color="secondary"
                      >
                        Customize
                      </Button>
                    </div>
                  </div>
                  <div className="img-hover" />
                  <div className="image">
                    <img src={require("../images/shoppyBag.jpg")} />
                    <div className="content">
                      <Button
                        variant="contained"
                        size="large"
                        color="secondary"
                      >
                        Customize
                      </Button>
                    </div>
                  </div>
                  <div className="image">
                    <img src={require("../images/shoppyBag.jpg")} />
                    <div className="content">
                      <Button
                        variant="contained"
                        size="large"
                        color="secondary"
                      >
                        Customize
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="img-box">
                <div className="product-images">
                  <div className="image">
                    <img src={require("../images/perfume1.jpg")} />
                    <div className="content">
                      <Button
                        variant="contained"
                        size="large"
                        color="secondary"
                      >
                        Customize
                      </Button>
                    </div>
                  </div>
                  <div className="img-hover" />
                  <div className="image">
                    <img src={require("../images/perfume1.jpg")} />
                    <div className="content">
                      <Button
                        variant="contained"
                        size="large"
                        color="secondary"
                      >
                        Customize
                      </Button>
                    </div>
                  </div>
                  <div className="image">
                    <img src={require("../images/perfume1.jpg")} />
                    <div className="content">
                      <Button
                        variant="contained"
                        size="large"
                        color="secondary"
                      >
                        Customize
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </Grid>
      </div>
    );
  }
}

export default Section4;
