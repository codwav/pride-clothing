import React from "react";
import "./App.css";
import Home from "../src/components/home";
import About from "../src/components/about";
import Products from "../src/components/products";
import OurWork from "../src/components/ourWork";
import Contact from "../src/components/contact";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/products" component={Products} />
        <Route path="/ourwork" component={OurWork} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
