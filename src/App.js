import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CardComponent from "./components/CardComponent";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";
import Reviews from "./components/Reviews";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CardComponent />
      <Services />
      <Reviews />
      <Footer />
      <Copyright />
    </>
  );
}

export default App;
