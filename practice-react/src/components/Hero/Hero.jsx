import React from "react";
import userImg from "../../assets/avatar.png";
import heroImg from "../../assets/hero-img.png";

const Hero = () => {
  return (
    <>
      <div
        className="container-fluid mt-2 p-0 position-relative"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <div className="row align-items-center h-100  p-4">
          <div className="col-12 col-md-6 text-center text-md-start">
            <h1 className="display-3">
              Hi ✋ I'm <span className="text-primary fw-bolder">Rohan</span>
            </h1>
            <h3 className="fs-1 fw-bolder">MERN Stack Developer</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium non doloremque debitis! Tenetur qui eos repudiandae.
            </p>
            <button className="btn btn-outline-primary fw-bold me-2">
              Let's Talk
            </button>
            <button className="btn btn-outline-dark fw-bold">Learn More</button>
          </div>

          <div className="col-12 col-md-6 text-center">
            <img
              src={userImg}
              alt="user"
              className="img-fluid rounded-circle shadow-lg"
              style={{ maxHeight: "400px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
