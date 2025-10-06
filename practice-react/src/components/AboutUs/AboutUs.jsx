import React from "react";
import profile from "../../assets/avatar.png";

const AboutUs = () => {
  return (
    <div className="container mt-5 py-5">
      <div className="row align-items-center g-4">
        <div className="col-12 col-md-6 text-center">
          <img
            src={profile}
            alt="Profile"
            className="img-fluid rounded-circle shadow"
            style={{ width: "250px", height: "250px", objectFit: "cover" }}
          />
        </div>

        <div className="col-12 col-md-6">
          <h2 className="fw-bold mb-3">About Me</h2>
          <p className="text-muted">
            Hello! I'm{" "}
            <span className="fw-semibold text-dark">Rohan Maindarkar</span>, a
            passionate front-end developer who loves building responsive,
            user-friendly web applications using modern technologies like React,
            Bootstrap, and JavaScript. I enjoy learning new tools and
            continuously improving my craft.
          </p>
          <p className="text-muted">
            My goal is to create beautiful, efficient, and accessible web
            experiences that make a real impact. When I’m not coding, I like
            exploring design trends, contributing to open-source, and improving
            UI/UX workflows.
          </p>
          <div className="d-flex flex-wrap gap-3 mt-3">
            <a href="#" className="btn btn-dark">
              Download Resume
            </a>
            <a href="/contact-us" className="btn btn-outline-dark">
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <div className="row mt-5 text-center">
        <div className="col-12 col-md-4 mb-3">
          <h5 className="fw-bold">Experience</h5>
          <p className="text-muted">2+ Years in Web Development</p>
        </div>
        <div className="col-12 col-md-4 mb-3">
          <h5 className="fw-bold">Education</h5>
          <p className="text-muted">B.Tech in Computer Science</p>
        </div>
        <div className="col-12 col-md-4 mb-3">
          <h5 className="fw-bold">Location</h5>
          <p className="text-muted">Pune, India</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
