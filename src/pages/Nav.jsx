import React from "react";
import { Link } from "react-router-dom";
import "/src/styles/nav_style.css";
import { UserLogout } from "/src/context/auth";

const Navbar = () => {
  let isAuthenticated = false;
  const userData = localStorage.getItem("token");
  const userid = localStorage.getItem("user_id");
  const userrole = localStorage.getItem("role");

  if (userData && userid) {
    isAuthenticated = true;
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow sticky-top p-2">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <h1 className="m-0 bg">NextHire</h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link active fs-5 fw-medium">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/jobs"
                  className="btn btn-hover nav-link fs-5 fw-medium"
                >
                  Jobs
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="btn btn-hover nav-link fs-5 fw-medium"
                >
                  About
                </Link>
              </li>

              {userrole == "Employer" ? (
                <li className="nav-item">
                  <Link
                    to="/post_job"
                    className="btn btn-hover nav-link fs-5 fw-medium"
                  >
                    Post Job
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                  <Link
                    to="/contact"
                    className="btn btn-hover nav-link fs-5 fw-medium"
                  >
                    Contact
                  </Link>
                </li>
              )}
            </ul>

            {isAuthenticated && userrole === "Employer" ? (
              <div>
                <Link
                  to="/employe_profile"
                  className="btn btn-primary px-4 py-2 ms-lg-3"
                  style={{ backgroundColor: "#00b074" }}
                >
                  Profile <i className="ms-2"></i>
                </Link>
                <Link
                  to="/"
                  className="btn btn-danger px-4 py-2 ms-lg-3"
                  onClick={UserLogout}
                >
                  Logout <i className="ms-2"></i>
                </Link>
              </div>
            ) : isAuthenticated && userrole === "Job Seeker" ? (
              <div>
                <Link
                  to="/seeker_profile"
                  className="btn btn-success px-4 py-2 ms-lg-3"
                >
                  Profile <i className="ms-2"></i>
                </Link>
                <Link
                  to="/"
                  className="btn btn-danger px-4 py-2 ms-lg-3"
                  onClick={UserLogout}
                >
                  Logout <i className="ms-2"></i>
                </Link>
              </div>
            ) : (
              <>
                <Link to="/login" className="btn btn-primary px-4 py-2 ms-lg-3">
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="btn btn-success px-4 py-2 ms-lg-3"
                >
                  Signup
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
