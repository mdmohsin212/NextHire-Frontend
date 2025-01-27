import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationCrosshairs,
  faClock,
  faMoneyBill,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation, Link } from "react-router-dom";
import Footer from "./Footer";

const ShowJob = () => {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState({ job_type: "" });
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const search = new URLSearchParams(filter);
    fetch(`https://nexthire-backend.onrender.com/job/list/?${search}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, [filter]);

  const handleFilterChange = (jobType) => {
    setFilter({ job_type: jobType });
  };

  const showingJobs = location.pathname === "/" ? jobs.slice(0, 4) : jobs;

  return (
    <div>
      <div className="container-xxl py-5">
        <div className="container">
          <h1 className="text-center mb-5">Job Listing</h1>
          <div className="mb-4 text-center">
            <h5 className="form-label pb-2">Filter by Job Type</h5>
            <div
              className="btn-group pb-2 pt-2"
              role="group"
              aria-label="Job Type Filter"
            >
              <button
                className={`btn ${
                  filter.job_type === "" ? "btn-success" : "btn-outline-success"
                }`}
                onClick={() => handleFilterChange("")}
              >
                All
              </button>
              <button
                className={`btn ${
                  filter.job_type === "Full Time"
                    ? "btn-success"
                    : "btn-outline-success"
                }`}
                onClick={() => handleFilterChange("Full Time")}
              >
                Full Time
              </button>
              <button
                className={`btn ${
                  filter.job_type === "Part Time"
                    ? "btn-success"
                    : "btn-outline-success"
                }`}
                onClick={() => handleFilterChange("Part Time")}
              >
                Part Time
              </button>
              <button
                className={`btn ${
                  filter.job_type === "Remote"
                    ? "btn-success"
                    : "btn-outline-success"
                }`}
                onClick={() => handleFilterChange("Remote")}
              >
                Remote
              </button>
            </div>
          </div>

          {loading ? (
            <div className="d-flex justify-content-center py-5">
              <div className="spinner-border text-dark" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : showingJobs.length === 0 ? (
            <h3 className="text-center">No Jobs Available</h3>
          ) : (
            <div>
              {showingJobs.map((item) => (
                <div key={item.id} className="p-4 mb-4 border rounded">
                  <div className="row g-4">
                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid border rounded"
                        src={item.company_img}
                        alt={item.title}
                        style={{ width: "80px", height: "80px" }}
                      />
                      <div className="text-start ps-4">
                        <h5 className="mb-3">{item.title}</h5>
                        <span className="text-truncate me-3">
                          <FontAwesomeIcon
                            icon={faLocationCrosshairs}
                            style={{ color: "#63E6BE", marginRight: "6px" }}
                          />
                          {item.loaction}
                        </span>
                        <span className="text-truncate me-3">
                          <FontAwesomeIcon
                            icon={faClock}
                            style={{ color: "#63E6BE", marginRight: "6px" }}
                          />
                          {item.job_type}
                        </span>
                        <span className="text-truncate me-0">
                          <FontAwesomeIcon
                            icon={faMoneyBill}
                            style={{ color: "#63E6BE", marginRight: "6px" }}
                          />
                          ${item.salary}
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                      <small className="text-truncate">
                        Upload Date:{" "}
                        {new Date(item.posted_date).toLocaleDateString()}
                      </small>
                      <div className="d-flex mb-3 mt-3 gap-2">
                        <Link
                          to={`/job_details/${item.id}`}
                          className="btn btn-primary d-flex align-items-center"
                          style={{ backgroundColor: "#00b074" }}
                        >
                          <FontAwesomeIcon
                            icon={faUserTie}
                            style={{ marginRight: "8px" }}
                          />
                          Apply Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {location.pathname === "/" && (
                <div className="text-end mt-4">
                  <Link
                    to="/jobs"
                    className="bg bg-success btn-lg px-4 text-decoration-none rounded-pill shadow p-1 text-white"
                  >
                    See More Jobs
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {location.pathname !== "/" && <Footer />}
    </div>
  );
};

export default ShowJob;
