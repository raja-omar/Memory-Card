import React from "react";
import Container from "./Game/Gameboard/Container";
import Header from "./Header/Header";
import MainSection from "./Main/MainSection";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <MainSection />
      <div className="ctnFlex">
        <Container />
      </div>
    </>
  );
}

export default App;
