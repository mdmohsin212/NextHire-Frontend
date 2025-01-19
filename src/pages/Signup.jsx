import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { UserRegistration } from "/src/context/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  return (
    <>
      <ToastContainer position="top-center" />
      <div className="signup p-4 mb-5 rounded-4 w-75 m-auto mt-4">
        <h2 className="text-center">Sign up</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="signup-form">
              <form method="POST" className="register-form" id="register-form">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    First Name
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    placeholder="First Name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name2" className="form-label">
                    Last Name
                  </label>
                  <input
                    required
                    type="text"
                    name="name2"
                    id="name2"
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    required
                    type="text"
                    name="username"
                    id="username"
                    className="form-control"
                    placeholder="Username"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Your Email
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="role" className="form-label">
                    Role
                  </label>
                  <select name="role" id="role" className="form-select">
                    <option value="Employer">Employer</option>
                    <option value="Job Seeker">Job Seeker</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="pass" className="form-label">
                    Password
                  </label>
                  <input
                    required
                    type="password"
                    name="pass"
                    id="pass"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirm_password" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    required
                    type="password"
                    name="confirm_password"
                    id="confirm_password"
                    className="form-control"
                    placeholder="Confirm Password"
                  />
                </div>
                <div className="d-grid">
                  <button
                    type="submit"
                    name="signup"
                    id="signup"
                    className="btn btn-primary btn-bg"
                    style={{ backgroundColor: "#00b074" }}
                    onClick={UserRegistration}
                  >
                    Register
                  </button>
                </div>
                <a
                  href="/login"
                  className="d-block text-center mt-3 text-decoration-none"
                >
                  I am already a member
                </a>
              </form>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center">
            <img
              src="images/signup.svg"
              className="img-fluid rounded-4 w-75"
              alt="Sign up illustration"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
