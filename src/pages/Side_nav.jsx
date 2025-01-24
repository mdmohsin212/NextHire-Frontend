import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class ProfileNav extends Component {
  render() {
    const role = localStorage.getItem("role");
    return (
      <div className="profile-nav d-flex flex-column h-100">
        <ul className="nav flex-column text-start">
          <li className="nav-item">
            <NavLink
              className="nav-link-item"
              activeClassName="active-link-item"
              to="/profile"
            >
              Account
            </NavLink>
          </li>
          {role === "Job Seeker" ? (
            <div>
              <li className="nav-item">
                <NavLink
                  className="nav-link-item"
                  activeClassName="active-link-item"
                  to="/applied_jobs"
                >
                  Applied Jobs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link-item"
                  activeClassName="active-link-item"
                  to="/running_job"
                >
                  Running Jobs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link-item"
                  activeClassName="active-link-item"
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
                  className="nav-link-item"
                  activeClassName="active-link-item"
                  to="/employe_profile"
                >
                  My Jobs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link-item"
                  activeClassName="active-link-item"
                  to="/choisen_candidate"
                >
                  Chosen Candidates
                </NavLink>
              </li>
            </div>
          )}
          <li className="nav-item">
            <NavLink
              className="nav-link-item"
              activeClassName="active-link-item"
              to="/change_password"
            >
              Change Password
            </NavLink>
          </li>
        </ul>

        <style>
          {`
            .profile-nav .nav-link-item {
              color: #343a40;
              margin-bottom: 5px;
              padding: 10px;
              font-size: 20px;
              margin-left: -55px;
              border-radius: 6px;
              text-decoration: none;
              display: block;
            }

            .profile-nav .nav-link-item:hover {
              background-color: #00B074;
              color: white;
            }
         `}
        </style>
      </div>
    );
  }
}

export default ProfileNav;
