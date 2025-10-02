import React from "react";
import "./Hero.css";
import profile from "../../assets/avatar.png"; // put your image in public/

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>
          Hi, <br /> I’am <span>Rohan</span> <br /> MERN Stack Developer
        </h1>
        <button className="btn">Contact Us</button>

        <div className="social-icons">
          <a href="#">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fab fa-behance"></i>
          </a>
          <a href="#">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>

      <div className="hero-image">
        <div className="blue-bg">
          <img src={profile} alt="profile" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
