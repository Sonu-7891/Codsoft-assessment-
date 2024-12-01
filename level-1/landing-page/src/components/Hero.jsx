import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>We Are Creative</h2>
        <h1>Creative Digital Agency</h1>
        <p>
          Lorem ipsum has been the industry's standard dummy text ever since the
          1500s.
        </p>
        <div className="hero-buttons">
          <button>Read More</button>
          <button>Request a Consult</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
