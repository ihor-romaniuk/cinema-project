import React from "react";

import { Header } from "..";
import { Footer } from "..";
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
