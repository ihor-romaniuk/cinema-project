import React from "react";

import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Footer } from "../../components/Footer/Footer";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
