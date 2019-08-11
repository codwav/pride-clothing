import React from "react";
import "./App.css";
import Home from "./components/home";
import About from "./components/about";
import Products from "./components/products";
import OurWork from "./components/ourWork";
import Contact from "./components/contact";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/products" component={Products} />
          <Route path="/ourwork" component={OurWork} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
