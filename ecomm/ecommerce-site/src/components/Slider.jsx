import React from "react";
import Imgage from "../assets/images/banner.jpg";
const Slider = () => {
  return (
    <div>
      <div
        id="carouselExampleControlsNoTouching"
        className="carousel slide"
        data-bs-touch="false"
        data-bs-interval="false"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={Imgage}
              height={300}
              className="d-block  w-100 object-fit-fill overflow-hidden"
              alt="banner img"
            />
          </div>
          <div className="carousel-item">
            <img
              src={Imgage}
              height={300}
              className="d-block w-100 object-fit-fill overflow-hidden"
              alt="banner img"
            />
          </div>
          <div className="carousel-item">
            <img
              src={Imgage}
              height={300}
              className="d-block w-100 object-fit-fill overflow-hidden"
              alt="banner img"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
