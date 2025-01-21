import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class ProfileNav extends Component {
  render() {
    const role = localStorage.getItem("role");
    return (
      <div
        className="bg-light d-flex flex-column h-100"
        style={{ width: "250px" }}
      >
        <ul className="nav flex-column text-start">
          <li className="nav-item">
            <NavLink
              className="nav-link text-dark px-4 py-3 mb-2 rounded bg-white shadow-sm"
              activeClassName="active-link"
              to="/profile"
            >
              Account
            </NavLink>
          </li>
          {role === "Job Seeker" ? (
            <div>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-dark px-4 py-3 mb-2 rounded bg-white shadow-sm"
                  activeClassName="active-link"
                  to="/applied_jobs"
                >
                  Applied Jobs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-dark px-4 py-3 mb-2 rounded bg-white shadow-sm"
                  activeClassName="active-link"
                  to="/running_job"
                >
                  Running Jobs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-dark px-4 py-3 mb-2 rounded bg-white shadow-sm"
                  activeClassName="active-link"
                  to="/complete_job"
                >
                  Complete Job
                </NavLink>
              </li>
            </div>
          ) : (
            <div>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-dark px-4 py-3 mb-2 rounded bg-white shadow-sm"
                  activeClassName="active-link"
                  to="/employe_profile"
                >
                  <i className="bi bi-briefcase-fill me-2"></i> My Jobs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-dark px-4 py-3 mb-2 rounded bg-white shadow-sm"
                  activeClassName="active-link"
                  to="/choisen_candidate"
                >
                  <i className="bi bi-briefcase-fill me-2"></i> Chosen
                  Candidates
                </NavLink>
              </li>
            </div>
          )}
          <li className="nav-item">
            <NavLink
              className="nav-link text-dark px-4 py-3 rounded bg-white shadow-sm"
              activeClassName="active-link"
              to="/change_password"
            >
              <i className="bi bi-lock me-2"></i> Change Password
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default ProfileNav;
