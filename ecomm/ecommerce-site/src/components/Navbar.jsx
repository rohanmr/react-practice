import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark top-0 sticky-top">
        <div class="container-fluid d-flex justify-content-between  ">
          <Link class="navbar-brand  text-light texttitle ms-3" to="/">
            EcomExpress
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse justify-content-end my-2 px-4"
            id="navbarNavDropdown"
          >
            <ul class="navbar-nav ">
              <li class="nav-item">
                <Link class="nav-link active  text-light" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link  text-light "
                  aria-current="page"
                  to="/add-product"
                >
                  Add Product
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link  text-light" to="/features">
                  Features
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link  text-light" to="/product">
                  Products
                </Link>
              </li>
              <li class="nav-item  text-light">
                <Link class="nav-link position-relative " to="/cart">
                  <i class="bi bi-cart text-light"></i>
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    0<span class="visually-hidden">unread messages</span>
                  </span>
                </Link>
              </li>
              <li class="nav-item ">
                <Link class="nav-link  text-light" to="/login">
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
