import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center  bg-light">
      <div
        className="card shadow p-4 my-5 mx-auto"
        style={{ width: "22rem", borderRadius: "1rem" }}
      >
        <h3 className="text-center mb-4 fw-bold text-primary">Login</h3>

        <form>
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
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <a href="#" className="text-decoration-none small text-primary">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="btn btn-primary w-100 fw-semibold">
            Sign In
          </button>

          <p className="text-center mt-3 mb-0">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-decoration-none text-primary fw-semibold"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
