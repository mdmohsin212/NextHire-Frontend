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
      <div className="d-flex flex-grow-1 flex-wrap">
        <div className="col-12 col-md-2 bg-light py-3">
          <div className="d-flex justify-content-center align-items-center text-center">
            <ProfileNav />
          </div>
        </div>

        <div className="container-fluid mt-4 col-12 col-md-10 pb-5">
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
                      <th>Job Title</th>
                      <th>Location</th>
                      <th className="d-none d-md-table-cell">Job Type</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {applications.map((application) => (
                      <tr key={application.id}>
                        <td>{application.job.title}</td>
                        <td>{application.job.loaction}</td>
                        <td className="d-none d-md-table-cell">
                          {application.job.job_type}
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
