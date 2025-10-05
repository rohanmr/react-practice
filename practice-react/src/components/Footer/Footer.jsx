import React from "react";
import logo from "../../assets/logorm.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="card text-center ">
      <div className="text-light py-3 bg-dark">
        <img src={logo} alt="logo" width={150} />
      </div>
      <div className=" text-light bg-dark">
        <h5 className="card-title">Special title treatment</h5>
        <ul className="navbar-nav fw-semibold d-flex my-2 flex-row justify-content-center gap-2">
          <li className="nav-item ">
            <Link
              className="nav-link px-3 text-light"
              aria-current="page"
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link px-3 text-light" to="/skills">
              Skils
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link px-3 text-light" to="/projects">
              Projects
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link px-3 text-light" to="/about-us">
              About Us
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link px-3 text-light" to="/contact-us">
              Contact Us
            </Link>
          </li>
        </ul>
        <a href="#" className="btn btn-success">
          Go To GitHub
        </a>
      </div>
      <div className="py-3 text-light bg-dark">&copy; 2025 RMHC</div>
    </div>
  );
};

export default Footer;
