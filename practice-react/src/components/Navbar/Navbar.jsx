import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logorm.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-dark ">
      <div className="container px-5">
        <a className="navbar-brand fw-bold" href="#">
          <img src={logo} alt="logo" width={150} />
        </a>
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav gap-2 fw-semibold ">
            <li className="nav-item ">
              <Link className="nav-link text-light" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link text-light" to="/skills">
                Skils
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link text-light" to="/projects">
                Projects
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link text-light" to="/about-us">
                About Us
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link text-light" to="/contact-us">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="d-none d-xs-none d-md-block">
          <button className="btn btn-outline-primary rounded-1 ">
            Get started
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
