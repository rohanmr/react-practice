import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  return (
    <div className="d-flex justify-content-center align-items-center  bg-light">
      <div
        className="card shadow p-4 mt-4"
        style={{ width: "24rem", borderRadius: "1rem" }}
      >
        <h3 className="text-center mb-4 fw-bold text-primary">
          Create Account
        </h3>

        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-semibold">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Create a password"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label fw-semibold">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Re-enter your password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 fw-semibold">
            Register
          </button>

          <p className="text-center mt-3 mb-0">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-decoration-none text-primary fw-semibold"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
