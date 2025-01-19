import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import ProfileNav from "./Side_nav";
import { Link } from "react-router-dom";

const SeekerProfile = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const id = parseInt(localStorage.getItem("user_id"));

  useEffect(() => {
    fetch(
      `https://nexthire-backend.onrender.com/job/applied_job/?seeker_id=${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setApplications(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="d-flex flex-grow-1 flex-wrap flex-column flex-md-row">
        <div className="col-12 col-md-2 d-flex justify-content-center align-items-center text-center bg-light py-3">
          <ProfileNav />
        </div>

        <div className="container-fluid mt-4 col-12 col-md-10 pb-5">
          <div className="w-100">
            <h2 className="text-center pt-3 pb-3 text-success">
              My Applications
            </h2>
            <hr />
            {loading ? (
              <div className="d-flex justify-content-center py-5">
                <div className="spinner-border text-dark" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : applications.length > 0 ? (
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {applications.map((applicantData) => (
                  <div className="col" key={applicantData.id}>
                    <div className="card h-100 shadow-sm">
                      <img
                        src={applicantData.job.company_img}
                        className="img-fluid w-25 h-50 m-auto"
                        alt={`${applicantData.job.title}`}
                      />
                      <hr />
                      <div className="card-body">
                        <h5 className="card-title text-primary">
                          {applicantData.job.title}
                        </h5>
                        <p className="card-text">
                          <strong>Location:</strong>{" "}
                          {applicantData.job.loaction}
                        </p>
                        <p className="card-text">
                          <strong>Type:</strong> {applicantData.job.job_type}
                        </p>
                        <p className="card-text">
                          <strong>Status:</strong>{" "}
                          <span
                            className={`badge ${
                              applicantData.status === "Approved"
                                ? "bg-success"
                                : applicantData.status === "Rejected"
                                ? "bg-danger"
                                : "bg-secondary"
                            }`}
                          >
                            {applicantData.status}
                          </span>
                        </p>
                        <p className="card-text text-muted">
                          {applicantData.job.description.slice(0, 100)}...
                        </p>
                      </div>
                      <div className="card-footer text-center">
                        <Link
                          to={`/job_details/${applicantData.job.id}`}
                          className="btn btn-outline-success btn-sm"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center mt-5">No applications found.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SeekerProfile;