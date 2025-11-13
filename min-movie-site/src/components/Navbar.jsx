import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
import CartContext from "../context/CartContext";

const Navbar = () => {
  const { theme, toggelTheme } = useContext(ThemeContext);
  const isDark = theme === "dark";
  const { cartLength } = useContext(CartContext);

  return (
    <nav
      className={`navbar sticky-top navbar-expand-lg navbar-${
        isDark ? "dark" : "light"
      } bg-${theme} shadow-sm py-3`}
    >
      <div className="container-fluid px-4">
        <Link className="navbar-brand fw-bold fs-3 text-warning" to="/">
          🎥 MoviesHUB
        </Link>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center gap-2">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link fw-semibold ${
                  isDark ? "text-light" : "text-dark"
                }`}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/todo"
                className={`nav-link fw-semibold ${
                  isDark ? "text-light" : "text-dark"
                }`}
              >
                ToDo App
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/songs"
                className={`nav-link fw-semibold ${
                  isDark ? "text-light" : "text-dark"
                }`}
              >
                Songs
              </Link>
            </li>
            <li className="nav-item fs-4">
              <Link
                to="/cart"
                className={`nav-link fw-semibold ${
                  isDark ? "text-light" : "text-dark"
                }`}
              >
                🛒
                <sup className="bg-warning px-2 rounded-circle text-black">
                  {cartLength}
                </sup>
              </Link>
            </li>

            {/* Theme Toggle Button */}
            <li className="nav-item">
              <button
                onClick={toggelTheme}
                className="btn btn-sm btn-outline-warning ms-lg-3"
              >
                {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
