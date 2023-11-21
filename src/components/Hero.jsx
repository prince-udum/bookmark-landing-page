import React from "react";
import HeroImg from "../assets/illustration-hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="bg-img hero-bg"></div>
        <div className="hero-img-container">
          <img src={HeroImg} alt="computer" className="hero-img" />
        </div>
        <div className="hero-text">
          <h1 className="heading"> A Simple Bookmark Manager</h1>
          <p className="subheading">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="cta-container">
            <button className="btn cta-primary">Get it on Chrome</button>
            <button className="btn cta-secondary">Get it on Firefox</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
