import React from "react";
import "./App.css";
import Navbar from "../src/components/navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Navbar} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
