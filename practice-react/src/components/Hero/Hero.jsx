import React from "react";
import userImg from "../../assets/avatar.png";
import heroImg from "../../assets/hero-img.png";

const Hero = () => {
  return (
    <>
      <div
        className="container-fluid mt-5 p-0 position-relative overflow-hidden   "
        style={{
          height: "700px",
          width: "100%",
        }}
      >
        <div className="row align-items-center h-75 ms-md-5 p-2 p-md-4">
          <div className="col-12 col-md-6 text-center text-md-start">
            <div className="mt-5">
              <h1 className="display-md-3">
                Hi ✋ I'm <span className="text-primary fw-bold">Rohan</span>
              </h1>
              <h3 className="fs-md-1 fw-bolder">MERN Stack Developer</h3>
              <p className="w-md-75">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
                eveniet harum debitis provident quas labore soluta corrupti
                voluptatem illum exercitationem sit recusandae deserunt
              </p>
            </div>
            <button className="btn btn-outline-primary fw-bold me-2">
              Let's Talk
            </button>
            <button className="btn btn-outline-dark fw-bold">Learn More</button>
          </div>

          <div className="col-12 col-md-6 text-center mt-4">
            <img
              src={userImg}
              alt="user"
              className="img-fluid rounded-circle shadow-lg"
              style={{ maxHeight: "350px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
