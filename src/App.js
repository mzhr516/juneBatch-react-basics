import "./App.css";
import React from "react";
import { NavBar } from "./componets/Navbar";
import Carasol from "./componets/Carasol";
import Body from "./componets/Body";
import Footer from "./componets/Footer";

function App() {
  return (
    <div className="mainContainer">
      <h1>react tutorials...</h1>
      <NavBar />
      <Carasol />
      <Body />
      {Footer()}
    </div>
  );
}

export default App;
