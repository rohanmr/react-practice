import React from "react";
import Imgage from "../assets/images/banner.jpg";
const Slider = () => {
  return (
    <div>
      <div
        id="carouselExampleControlsNoTouching"
        class="carousel slide"
        data-bs-touch="false"
        data-bs-interval="false"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={Imgage}
              height={300}
              class="d-block  w-100 object-fit-fill overflow-hidden"
              alt="banner img"
            />
          </div>
          <div class="carousel-item">
            <img
              src={Imgage}
              height={300}
              class="d-block w-100 object-fit-fill overflow-hidden"
              alt="banner img"
            />
          </div>
          <div class="carousel-item">
            <img
              src={Imgage}
              height={300}
              class="d-block w-100 object-fit-fill overflow-hidden"
              alt="banner img"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
