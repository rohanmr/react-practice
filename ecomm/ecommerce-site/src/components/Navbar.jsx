import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark top-0 sticky-top">
        <div className="container-fluid d-flex justify-content-between  ">
          <Link className="navbar-brand  text-light texttitle ms-3" to="/">
            EcomExpress
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end my-2 px-4"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link className="nav-link active  text-light" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link  text-light "
                  aria-current="page"
                  to="/add-product"
                >
                  Add Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-light" to="/travles">
                  Travles
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-light" to="/product">
                  Products
                </Link>
              </li>
              <li className="nav-item  text-light">
                <Link className="nav-link position-relative " to="/cart">
                  <i className="bi bi-cart text-light"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    0<span className="visually-hidden">unread messages</span>
                  </span>
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link  text-light" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
Navbar;
