import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import ProfileNav from "./Side_nav";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SeekerProfile = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setJob] = useState(null);
  const [Text, setText] = useState("");
  const id = localStorage.getItem("user_id");

  useEffect(() => {
    fetch(
      `https://nexthire-backend.onrender.com/job/applied_job/?seeker_id=${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setApplications(data.filter((job) => job.status === "Approved" && job.is_complete === false));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, [id]);

  const handleSubmitJob = () => {
    if (Text && selectedJob) {
          const data = {
            Submit_Job: Text,
            is_complete: true,
          };
        fetch(
            `https://nexthire-backend.onrender.com/job/applied_job/${selectedJob.id}/`,
            {
              method: "PATCH",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(data),
            }
          )
            .then((res) => {
              if (res.ok) {
                toast.success("Task Submit successfully");
              } else {
                toast.error("Failed to assign task. Please try again.");
              }
            })
            .catch((error) => console.error("Error:", error));
        } else {
          toast.error("Please fill in all fields.");
        }
        console.log("Submitted for job:", selectedJob);
        console.log("Submission Text:", Text);
        setJob(null);
        setText("");
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <ToastContainer position="top-center" />
      <div className="d-flex flex-grow-1 flex-wrap flex-column flex-md-row p-0 m-0">
        <div className="order-1 order-md-1 d-flex justify-content-center align-items-center text-start bg-light py-1">
          <ProfileNav />
        </div>

        <div className="container-fluid mt-4 col-12 col-md-10 pb-5 order-2 order-md-2">
          <div className="w-100">
            <h2 className="text-center pt-3 pb-3 text-success">
              Running Applications
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
                          <span className="badge bg-success text-white">
                            {application.status}
                          </span>
                        </td>
                        <td>
                          {application.task && application.final_dateline ? (
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
                    height: "190px",
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />

      {selectedJob && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div
            className="modal-dialog modal-lg modal-dialog-centered"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Submit Your Job</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setJob(null)}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  <b>Job Title :</b> {selectedJob.job.title}
                </p>
                <p>
                  <b>Task :</b> "{selectedJob.task}"
                </p>
                <div className="mb-3 pt-2">
                  <label htmlFor="Text" className="form-label">
                    Submission Details:
                  </label>
                  <textarea
                    className="form-control"
                    id="Text"
                    rows="7"
                    value={Text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter your submission details here"
                  ></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setJob(null)}
                >
                  Close
                </button>
                <button className="btn btn-success" onClick={handleSubmitJob}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SeekerProfile;
