import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import ProfileNav from "./Side_nav";

const CompleteJob = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const id = localStorage.getItem("user_id");

  useEffect(() => {
    fetch(
      `https://nexthire-backend.onrender.com/job/applied_job/?seeker_id=${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setApplications(data.filter((job) => job.is_complete === true));
        console.log(data);
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
              Complete Applications
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
                          {application.is_complete ? (
                            <p
                              className={`badge text-white rounded-pill shadow-sm px-3 py-1 d-inline-block ${
                                application.submit_status === "Approved"
                                  ? "bg-success"
                                  : application.submit_status === "Rejected"
                                  ? "bg-danger"
                                  : "bg-secondary"
                              }`}
                              style={{
                                fontSize: "0.9rem",
                                margin: 0,
                                maxWidth: "fit-content",
                              }}
                            >
                              {application.submit_status}
                            </p>
                          ) : application.task && application.final_dateline ? (
                            <button
                              className="btn btn-primary"
                              style={{ backgroundColor: "#00b074" }}
                              onClick={() => setJob(application)}
                            >
                              Submit Job
                            </button>
                          ) : null}
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

export default CompleteJob;
