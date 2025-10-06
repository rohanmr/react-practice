import React from "react";
import logo from "../../assets/logorm.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="card text-center">
      <div className="text-light py-3 bg-dark">
        <img src={logo} alt="logo" width={120} className="img-fluid" />
      </div>
      <div className="text-light bg-dark px-3">
        <h5 className="card-title">Explore My Portfolio</h5>
        <ul className="navbar-nav fw-semibold d-flex flex-column flex-md-row my-2 justify-content-center align-items-center gap-2">
          <li className="nav-item">
            <Link className="nav-link px-2 text-light" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link px-2 text-light" to="/skills">
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link px-2 text-light" to="/projects">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link px-2 text-light" to="/about-us">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link px-2 text-light" to="/contact-us">
              Contact Us
            </Link>
          </li>
        </ul>
        <a href="#" className="btn btn-success mb-3">
          Go To GitHub
        </a>
      </div>
      <div className="py-3 text-light bg-dark small">&copy; 2025 RMHC</div>
    </div>
  );
};

export default Footer;
