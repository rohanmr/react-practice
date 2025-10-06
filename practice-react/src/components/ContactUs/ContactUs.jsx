import React from "react";

const ContactUs = () => {
  return (
    <div className="container mt-5 py-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold">Contact Me</h2>
        <p className="text-muted">
          I'd love to hear from you! Fill out the form below and I'll get back
          to you soon.
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card shadow border-0 p-4">
            <form>
              <div className="mb-3">
                <label className="form-label fw-semibold">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter subject"
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Message</label>
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Type your message..."
                  required
                ></textarea>
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-dark">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <h5 className="fw-bold">Connect with Me</h5>
        <div className="d-flex justify-content-center gap-3 mt-2">
          <a href="#" className="text-dark fs-4">
            <i className="bi bi-github"></i>
          </a>
          <a href="#" className="text-primary fs-4">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="#" className="text-danger fs-4">
            <i className="bi bi-envelope-fill"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
