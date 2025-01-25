import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faTasks,
  faCheckCircle,
  faFileAlt,
  faBriefcase,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

class ProfileNav extends Component {
  render() {
    const role = localStorage.getItem("role");
    return (
      <div className="profile-nav d-flex flex-column h-100">
        <ul
          className="nav flex-column text-start p-1"
          style={{
            width: "230px",
          }}
        >
          <li className="nav-item">
            <NavLink
              className="nav-link-item"
              activeClassName="active-link-item"
              to="/profile"
            >
              <FontAwesomeIcon icon={faUser} className="me-2" />
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
                  <FontAwesomeIcon
                    icon={faFileAlt}
                    className="me-2 text-info"
                  />
                  Applied Jobs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link-item"
                  activeClassName="active-link-item"
                  to="/running_job"
                >
                  <FontAwesomeIcon
                    icon={faTasks}
                    className="me-2 text-success"
                  />
                  Running Jobs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link-item"
                  activeClassName="active-link-item"
                  to="/complete_job"
                >
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="me-2 text-success"
                  />
                  Complete Jobs
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
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    className="me-2 text-dark"
                  />
                  My Jobs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link-item"
                  activeClassName="active-link-item"
                  to="/choisen_candidate"
                >
                  <FontAwesomeIcon
                    icon={faUsers}
                    className="me-2 text-secondary"
                  />
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
              <FontAwesomeIcon icon={faLock} className="me-2" />
              Change Password
            </NavLink>
          </li>
        </ul>
        <style>
          {`
        .profile-nav .nav-link-item {
            color: black;
            margin-bottom: 15px;
            padding: 15px 20px;
            font-size: 18px;
            border-radius: 8px;
            text-decoration: none;
            display: flex;
            align-items: center;
        }
        .profile-nav .nav-link-item:hover {
            background-color: rgb(200, 242, 228);
            color: black;
        }
         `}
        </style>
      </div>
    );
  }
}

export default ProfileNav;
