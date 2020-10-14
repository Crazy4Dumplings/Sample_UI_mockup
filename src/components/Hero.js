import React from "react";
import "../styles/Hero.css";

function Hero() {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-item">
              <h2>INTRODUCING</h2>
              <h2>ABC INC.</h2>
              <p>
                We provide strategic technology consulting, staffing, and
                technology integration and implementation.
              </p>
            </div>
            <div className="hero-item">
              <img
                src="assets/img/hero.jpg"
                alt="Hero Image"
                className="hero-img"
              ></img>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
