import React from "react";

import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { MainContainer } from "../../routes";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header/>
      <MainContainer/>
      <Footer/>
    </div>
  );
}

export default App;
