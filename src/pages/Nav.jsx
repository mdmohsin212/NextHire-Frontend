import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "/src/styles/nav_style.css";
import { UserLogout } from "/src/context/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faRightToBracket,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  let isAuthenticated = false;
  const userData = localStorage.getItem("token");
  const userid = localStorage.getItem("user_id");
  const userrole = localStorage.getItem("role");
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch(`https://nexthire-backend.onrender.com/user/profile/?id=${userid}`)
      .then((response) => response.json())
      .then((data) => {
        setInfo(data[0].user);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

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
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link btn btn-hover active fs-5 fw-medium"
                >
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
              <li className="nav-item">
                <Link
                  to="/contact"
                  className="btn btn-hover nav-link fs-5 fw-medium"
                >
                  Contact
                </Link>
              </li>
            </ul>

            <div className="ms-5 me-5">
              <div className="text-center">
                {isAuthenticated ? (
                  <div className="d-flex align-items-center gap-4 justify-content-center justify-content-sm-start">
                    <div className="nav-item dropdown">
                      <NavLink
                        className="nav-link dropdown-toggle"
                        to="#"
                        id="accountDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <div
                          className="d-flex align-items-center justify-content-center rounded-circle btn-bg text-white"
                          style={{
                            width: "40px",
                            height: "40px",
                            fontSize: "20px",
                          }}
                        >
                          {String(info.username)[0].toUpperCase()}
                        </div>
                      </NavLink>
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="accountDropdown"
                      >
                        {userrole === "Employer" ? (
                          <>
                            <li>
                              <NavLink className="dropdown-item" to="/profile">
                                <FontAwesomeIcon
                                  icon={faUser}
                                  className="me-2"
                                />
                                Dashboard
                              </NavLink>
                            </li>
                            <li>
                              <NavLink className="dropdown-item" to="/post_job">
                                <FontAwesomeIcon
                                  icon={faBriefcase}
                                  className="me-2"
                                />
                                Post Job
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                className="dropdown-item"
                                to="/"
                                onClick={UserLogout}
                              >
                                <FontAwesomeIcon
                                  icon={faRightToBracket}
                                  className="me-2"
                                />
                                Logout
                              </NavLink>
                            </li>
                          </>
                        ) : userrole === "Job Seeker" ? (
                          <>
                            <li>
                              <NavLink className="dropdown-item" to="/profile">
                                <FontAwesomeIcon
                                  icon={faUser}
                                  className="me-2"
                                />
                                Dashboard
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                className="dropdown-item"
                                to="/applied_jobs"
                              >
                                <FontAwesomeIcon
                                  icon={faBriefcase}
                                  className="me-2"
                                />
                                Applied Job
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                className="dropdown-item"
                                to="/"
                                onClick={UserLogout}
                              >
                                <FontAwesomeIcon
                                  icon={faRightToBracket}
                                  className="me-2"
                                />
                                Logout
                              </NavLink>
                            </li>
                          </>
                        ) : null}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div>
                    <Link
                      to="/login"
                      className="btn btn-primary px-4 py-2 ms-lg-3"
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="btn btn-success px-4 py-2 ms-lg-3"
                    >
                      Signup
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
