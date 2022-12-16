import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="card-container">
        <Card />
        <Card />
      </div>
    </>
  );
}

export default App;
