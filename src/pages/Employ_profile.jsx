import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationCrosshairs,
  faClock,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { JobDeleteHandel } from "../components/job_post";
import Profile from "./Profile";

const EmployeProfile = () => {
  const [jobs, setJobs] = useState([]);
  const id = localStorage.getItem("user_id");

  useEffect(() => {
    fetch(`https://nexthire-backend.onrender.com/job/list/?employer_id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return (
    <>
      <Profile />
      <div className="w-75 m-auto">
        <h3 className="text-center pt-5 p-2 fw-medium">My Jobs</h3> <hr />
        {jobs.length === 0 ? (
          <p className="text-center fw-medium">No jobs available.</p>
        ) : (
          jobs.map((item) => (
            <div key={item.id} className="p-4 mb-4 border rounded">
              <div className="row g-4">
                <div className="col-sm-12 col-md-8 d-flex align-items-center">
                  <img
                    className="flex-shrink-0 img-fluid border rounded"
                    src={item.company_img}
                    alt=""
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
                      className="btn btn-primary"
                      style={{ backgroundColor: "#00b074" }}
                      to={`/applicant_list/${item.id}`}
                    >
                      See Applicant
                    </Link>
                    <Link
                      to="/"
                      className="btn btn-danger"
                      onClick={(e) => JobDeleteHandel(e, item.id)}
                    >
                      Delete
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <Footer />
    </>
  );
};

export default EmployeProfile;
