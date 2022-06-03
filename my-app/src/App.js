import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Componont/Home";
import Contact from "./Componont/Contact";
import About from "./Componont/About";
import Service from "./Componont/Service";
import Join from "./Componont/Join";
import { Redirect } from "react-router-dom";
import Navebar from "./Componont/Navebar";
import Login from "./Componont/Login";
import Register from "./Componont/Register";

function App() {
  return (
    <>
      <Navebar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route exact path="/Service" component={Service} />
        <Route exact path="/join" component={Join} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
