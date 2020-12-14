import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Travels from "./components/Travels";
import Reservation from "./components/Reservation";
import GetTokens from "./components/GetTokens";

import DestinationContextProvider from "./context/DestinationContext";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./css/styles.css";

function Dapp() {
  return (
    <>
      <Router>
        <DestinationContextProvider>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/reservation" exact component={Reservation} />
            <Route path="/travels" exact component={Travels} />
            <Route path="/getTokens" exact component={GetTokens} />
          </Switch>
        </DestinationContextProvider>
        <Footer />
      </Router>
    </>
  );
}

export default Dapp;
