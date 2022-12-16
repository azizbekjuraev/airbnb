import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
function App() {
  const firstName = `Azizbek`;
  const lastName = `Juraev`;
  return (
    <>
      <Navbar />
      <Hero />
      <div className="card-container">
        <Card />
        <Card />
      </div>
      <h1>It is currently {new Date().getHours()} o'clock!</h1>
    </>
  );
}

export default App;
