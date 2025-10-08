import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-auto">
      <div className="container">
        <div className="row gy-4">
          {/* Brand Section */}
          <div className="col-md-4">
            <h4 className="fw-bold text-primary mb-3">EcomExpress</h4>
            <p className="text-muted">
              Building smarter tech solutions with innovation and design. Let’s
              connect and grow together!
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 col-6">
            <h5 className="fw-semibold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/"
                  className="text-light text-decoration-none d-block mb-2"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/product"
                  className="text-light text-decoration-none d-block mb-2"
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  to="/features"
                  className="text-light text-decoration-none d-block mb-2"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/add-product"
                  className="text-light text-decoration-none d-block mb-2"
                >
                  Add Product
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-md-2 col-6">
            <h5 className="fw-semibold mb-3">Resources</h5>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/blog"
                  className="text-light text-decoration-none d-block mb-2"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-light text-decoration-none d-block mb-2"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  to="/support"
                  className="text-light text-decoration-none d-block mb-2"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-light text-decoration-none d-block mb-2"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4 text-md-end text-center">
            <h5 className="fw-semibold mb-3">Follow Us</h5>
            <div className="d-flex justify-content-md-end justify-content-center gap-3">
              <Link to="#" className="text-light fs-4">
                <i className="bi bi-facebook"></i>
              </Link>
              <Link to="#" className="text-light fs-4">
                <i className="bi bi-twitter"></i>
              </Link>
              <Link to="#" className="text-light fs-4">
                <i className="bi bi-instagram"></i>
              </Link>
              <Link to="#" className="text-light fs-4">
                <i className="bi bi-linkedin"></i>
              </Link>
            </div>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        <div className="text-center text-light small ">
          © 2025 EcomExpress All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
