import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import ProfileNav from "./Side_nav";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTasks, FaCheckCircle, FaEye } from "react-icons/fa";

const ChoisenCandate = () => {
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [task, setTask] = useState("");
  const [dateline, setDateline] = useState("");
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const id = localStorage.getItem("user_id");

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://nexthire-backend.onrender.com/job/applied_job/?employer_id=${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setApplicants(data.filter((job) => job.status === "Approved"));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, [id]);

  const handleAssignTask = (applicant) => {
    setSelectedApplicant(applicant);
  };

  const handleSaveTask = () => {
    if (task && dateline && selectedApplicant) {
      const data = {
        task: task,
        final_dateline: dateline,
        is_jobAssign: true,
      };
      fetch(
        `https://nexthire-backend.onrender.com/job/applied_job/${selectedApplicant.id}/`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      )
        .then((res) => {
          if (res.ok) {
            toast.success("Task assigned successfully");
            setSelectedApplicant(null);
            window.location.href = "/choisen_candidate";
          } else {
            toast.error("Failed to assign task. Please try again.");
          }
        })
        .catch((error) => console.error("Error:", error));
    } else {
      toast.error("Please fill in all fields.");
    }
  };


  const handleJobStatus = (applicantId, status) => {
    fetch(
      `https://nexthire-backend.onrender.com/job/applied_job/${applicantId}/`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ submit_status: status }),
      }
    )
      .then((res) => {
        if (res.ok) {
          window.location.href = "/choisen_candidate";
        } else {
          toast.error(`Failed to update job status.`);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Something went wrong.");
      });
  };


  return (
    <div className="d-flex flex-column min-vh-100">
      <ToastContainer position="top-center" />
      <div className="d-flex flex-grow-1 flex-wrap flex-column flex-md-row p-0 m-0">
        <div className="order-1 order-md-1 d-flex justify-content-center align-items-center text-start bg-light py-1">
          <ProfileNav />
        </div>

        <div className="container-fluid mt-4 col-12 col-md-10 order-2 order-md-2 pb-5 pt-md-2">
          <div className="w-100">
            <h2 className="text-center pt-3 pb-3 text-success">
              All Candidates
            </h2>
            <hr />
            {loading ? (
              <div className="d-flex justify-content-center py-5">
                <div className="spinner-border text-dark" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              <div className="table-responsive col-12">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Job Title</th>
                      <th>Job Type</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {applicants.map((application) => (
                      <tr key={application.id}>
                        <td>{application.candidate.name}</td>
                        <td className="d-none d-md-block">
                          {application.job.title}
                        </td>
                        <td>{application.job.job_type}</td>
                        <td>
                          {application.is_complete === true ? (
                            <button
                              className="btn btn-primary d-flex align-items-center"
                              style={{ backgroundColor: "#00b074" }}
                              onClick={() => handleAssignTask(application)}
                              data-bs-toggle="modal"
                              data-bs-target="#assignTaskModal2"
                            >
                              <FaEye className="me-2" /> View
                            </button>
                          ) : application.is_jobAssign === true ? (
                            <span className="text-success">
                              <button className="btn btn-success btn-sm d-flex align-items-center disabled">
                                <FaCheckCircle className="me-2" /> Task Assigned
                              </button>
                            </span>
                          ) : (
                            <button
                              className="btn btn-primary d-flex align-items-center"
                              style={{ backgroundColor: "#00b074" }}
                              onClick={() => handleAssignTask(application)}
                              data-bs-toggle="modal"
                              data-bs-target="#assignTaskModal"
                            >
                              <FaTasks className="me-2" /> Assign
                            </button>
                          )}
                        </td>
                        <td>
                          {application.submit_status == "Pending" ? (
                            <div className="d-flex gap-2 flex-wrap">
                              <button
                                className="btn btn-success"
                                onClick={() =>
                                  handleJobStatus(application.id, "Approved")
                                }
                              >
                                Approved
                              </button>
                              <button
                                className="btn btn-danger"
                                onClick={() =>
                                  handleJobStatus(application.id, "Rejected")
                                }
                              >
                                Rejected
                              </button>
                            </div>
                          ) : (
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
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="assignTaskModal"
        tabIndex="-1"
        aria-labelledby="assignTaskModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="assignTaskModalLabel">
                Assign Task
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="dateline" className="form-label">
                  Dateline:
                </label>
                <input
                  type="date"
                  id="dateline"
                  className="form-control"
                  value={dateline}
                  onChange={(e) => setDateline(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="task" className="form-label">
                  Task:
                </label>
                <textarea
                  id="task"
                  className="form-control"
                  rows="7"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                  placeholder="Enter the task for the applicant"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-success"
                onClick={handleSaveTask}
                data-bs-dismiss="modal"
              >
                Assign
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="assignTaskModal2"
        tabIndex="-1"
        aria-labelledby="assignTaskModal2Label"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="assignTaskModal2Label">
                Submission Details
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {selectedApplicant ? (
                <div>
                  <div className="mb-3">
                    <label htmlFor="">
                      <b>Task : </b> "{selectedApplicant.task}"
                    </label>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      <b>Submission : </b> {selectedApplicant.Submit_Job}
                    </label>
                  </div>
                </div>
              ) : (
                <p>No task assigned yet.</p>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ChoisenCandate;
