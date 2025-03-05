import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import ProfileNav from "./Side_nav";
import { Link } from "react-router-dom";
import {faBriefcase} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SeekerProfile = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const id = parseInt(localStorage.getItem("user_id"));

  useEffect(() => {
    fetch(
      `https://nexthire-backend.vercel.app/job/applied_job/?seeker_id=${id}`
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
      <div className="d-flex flex-grow-1 flex-wrap flex-column flex-md-row p-0 m-0">
        <div className="order-1 order-md-1 d-flex justify-content-center align-items-center text-start bg-light py-1">
          <ProfileNav />
        </div>

        <div className="container-fluid mt-4 col-12 col-md-10 pb-5 order-2 order-md-2">
          <div className="w-100">
            <h2 className="text-center pt-3 pb-3 text-success">
              My Applications
            </h2>

            {loading ? (
              <div className="d-flex justify-content-center py-5">
                <div className="spinner-border text-dark" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : applications.length > 0 ? (
              <div className="table-responsive col-12">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Job Title</th>
                      <th className="d-none d-md-table-cell">Location</th>
                      <th className="d-none d-md-table-cell">Applied date</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {applications.map((application) => (
                      <tr key={application.id}>
                        <td>{application.id}</td>
                        <td>{application.job.title}</td>
                        <td className="d-none d-md-table-cell">
                          {application.job.location}
                        </td>
                        <td className="d-none d-md-table-cell">
                          {new Date(application.candidate.applied_date).toLocaleString()}
                        </td>
                        <td>
                          <span
                            className={`badge text-white ${
                              application.status === "Approved"
                                ? "bg-success"
                                : application.status === "Rejected"
                                ? "bg-danger"
                                : "bg-secondary"
                            }`}
                          >
                            {application.status}
                          </span>
                        </td>
                        <td>
                          <Link
                            to={`/job_details/${application.job.id}`}
                            className="btn btn-primary"
                            style={{ backgroundColor: "#00b074" }}
                          >
                            <FontAwesomeIcon
                              icon={faBriefcase}
                              className="me-2"
                            />
                            View Job
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="d-flex justify-content-center">
                <img
                  src="../images/no-data.svg"
                  alt=""
                  className="img-fluid"
                  style={{
                    width: "150px",
                    height: "200px",
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SeekerProfile;
