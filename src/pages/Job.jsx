import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationCrosshairs,
  faClock,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation, Link } from "react-router-dom";

const ShowJob = () => {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState({});
  const location = useLocation();

  useEffect(() => {
    const search = new URLSearchParams(filter);
    fetch(`https://nexthire-backend.onrender.com/job/list/?${search}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        console.log(search);
      })
      .catch((error) => console.error("Error:", error));
  }, [filter]);

  const JobTypeFilter = (event) => {
    const { value } = event.target;
    setFilter({ filter, "job_type": value });
  };

  const showingJobs = location.pathname === "/" ? jobs.slice(0, 3) : jobs;

  return (
    <div>
      <div className="container-xxl py-5">
        <div className="container">
          <h1 className="text-center mb-5">
            Job Listing
          </h1>
          <div className="tab-content" id="tab-content">
            <div className="mb-4">
              <h5 className="form-label">
                Filter by Job Type
              </h5>
              <select
                className="form-select"
                onClick={JobTypeFilter}
              >
                <option value="">All</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Remote">Remote</option>
              </select>
            </div>

            {showingJobs.length == 0 ?(
              <h3 className="text-center">No Jobs Available</h3>
            ):(
            showingJobs.map((item) => (
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
                      <i className="far fa-calendar-alt text-primary"></i>
                      Upload Date:{" "}
                      {new Date(item.posted_date).toLocaleDateString()}
                    </small>

                    <div className="d-flex mb-3 mt-3 gap-2">
                      <Link
                        to={`/job_details/${item.id}`}
                        className="btn btn-primary"
                        style={{ backgroundColor: "#00b074" }}
                      >
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowJob;
