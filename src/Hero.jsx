import React from "react";
import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius libero
            nulla expedita autem ducimus, deleniti assumenda voluptatum dolor
            veniam cum, pariatur suscipit earum, culpa dolore quibusdam possimus
            soluta quia iusto!
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} className="img" alt="woman and the browser" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
