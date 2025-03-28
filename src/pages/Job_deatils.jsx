import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationCrosshairs,
  faClock,
  faMoneyBill,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { JobApplication } from "../components/job_application";;
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const JobDetails = () => {
  const { id: job_id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://nexthire-backend.vercel.app/job/list/${job_id}/`)
      .then((res) => res.json())
      .then((data) => {
        setJob(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, [job_id]);

return (
  <div className="d-flex flex-column min-vh-100">
    <ToastContainer position="top-center" />

    <div className="flex-grow-1">
      {loading ? (
        <div className="d-flex justify-content-center align-items-center flex-grow-1 py-5">
          <div className="spinner-border text-dark" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : job ? (
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row gy-5 gx-4">
              <div className="col-lg-8">
                <div className="d-flex align-items-center mb-5">
                  <img
                    className="flex-shrink-0 img-fluid border rounded"
                    src={job.company_img}
                    alt={job.title}
                    style={{ width: "80px", height: "80px" }}
                  />
                  <div className="ps-4">
                    <h3 className="mb-3">{job.title}</h3>
                    <span className="me-3">
                      <FontAwesomeIcon
                        icon={faLocationCrosshairs}
                        style={{ color: "#63E6BE", marginRight: "6px" }}
                      />
                      {job.location}
                    </span>
                    <span className="me-3">
                      <FontAwesomeIcon
                        icon={faClock}
                        style={{ color: "#63E6BE", marginRight: "6px" }}
                      />
                      {job.job_type}
                    </span>
                    <span>
                      <FontAwesomeIcon
                        icon={faMoneyBill}
                        style={{ color: "#63E6BE", marginRight: "6px" }}
                      />
                      ${job.salary}
                    </span>
                  </div>
                </div>

                <div className="mb-5">
                  <h4 className="mb-3">Job description</h4>
                  <p>{job.description}</p>
                  <h4 className="mb-3">Qualifications</h4>
                  <p>{job.requirment}</p>
                </div>
              </div>

              <div className="col-lg-4">
                <div
                  className="rounded p-5"
                  style={{ backgroundColor: "#effdf5" }}
                >
                  <h4 className="mb-4">Job Summary</h4>
                  <p>
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "#00b074", marginRight: "8px" }}
                    />
                    Published On:{" "}
                    {new Date(job.posted_date).toLocaleDateString()}
                  </p>
                  <p>
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "#00b074", marginRight: "8px" }}
                    />
                    Vacancy : {job.vacancy}
                  </p>
                  <p>
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "#00b074", marginRight: "8px" }}
                    />
                    Job Nature : {job.job_type}
                  </p>
                  <p>
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "#00b074", marginRight: "8px" }}
                    />
                    Salary : ${job.salary}
                  </p>
                  <p>
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "#00b074", marginRight: "8px" }}
                    />
                    Location : {job.location}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="mb-4">Apply For The Job</h4>
                <form method="post" encType="multipart/form-data">
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control"
                        id="applicant-name"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="email"
                        className="form-control"
                        id="applicant-email"
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control"
                        id="applicant-website"
                        placeholder="Portfolio Website"
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="file"
                        id="applicant-cv"
                        className="form-control bg-white"
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        className="form-control"
                        rows="5"
                        id="applicant-letter"
                        placeholder="Cover letter"
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary w-100"
                        type="button"
                        style={{ backgroundColor: "#00b074" }}
                        onClick={(e) => JobApplication(e, job.id)}
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center">No job details available</p>
      )}
    </div>

    <Footer />
  </div>
);

};

export default JobDetails;
