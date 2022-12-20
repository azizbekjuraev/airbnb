import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import list from "./components/Data";
console.log(list);

function App() {
  const cards = list.map((item) => {
    return (
      <Card
        img={item.img}
        ratings={item.ratings}
        price={item.price}
        country={item.country}
        reviewCount={item.reviewCount}
        title={item.title}
      />
    );
  });
  return (
    <>
      <Navbar />
      <Hero />
      <section className="card-container">{cards}</section>
    </>
  );
}

export default App;
