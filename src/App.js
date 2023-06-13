import "./App.css";
import React from "react";
import { NavBar } from "./componets/Navbar";
import Carasol from "./componets/Carasol";
import Body from "./componets/Body";
import Footer from "./componets/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapCarasol from "./componets/BootstrapCarasol";
import Greeting from "./componets/Greeting";

function App() {
  return (
    <div className="mainContainer">
      <NavBar />
      <Carasol />
      <BootstrapCarasol />
      <Body />
      <div className="greeting">
        <Greeting />
      </div>
      {Footer()}
      <h1 className="h1 border border-dark">good evening....</h1>
    </div>
  );
}

export default App;
