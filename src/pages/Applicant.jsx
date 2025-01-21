import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";

const Applicant = () => {
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const job_id = useParams().id;

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://nexthire-backend.onrender.com/job/applied_job/?job_id=${job_id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setApplicants(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, [job_id]);

  const handleStatusChange = (newStatus) => {
    if (selectedApplicant) {
      const updatedApplicants = applicants.map((applicant) =>
        applicant.id === selectedApplicant.id
          ? {
              ...applicant,
              candidate: { ...applicant.candidate, status: newStatus },
            }
          : applicant
      );
      setApplicants(updatedApplicants);

      const data = {
        status: newStatus,
        applicant_name: selectedApplicant.candidate.name,
        employer: selectedApplicant.employer,
        job: selectedApplicant.job,
      };

      fetch(
        `https://nexthire-backend.onrender.com/job/applied_job/${selectedApplicant.id}/`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      )
        .then((res) => res.json())
        .then(() => {
          setSelectedApplicant(null);
          window.location.href = "/choisen_candidate";
        })
        .catch((error) => console.error("Error:", error));
    }
  };

  return (
    <div className="d-flex flex-column vh-100">
      <h2 className="text-center bg-dark text-white py-3">All Applicants</h2>
      <div className="container my-4">
        {loading ? (
          <div className="d-flex justify-content-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : applicants.length === 0 ? (
          <p className="text-center text-muted">No applicants for this job.</p>
        ) : (
          <div>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Job Title</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {applicants.map((applicant) => (
                  <tr key={applicant.id}>
                    <th scope="row">{applicant.candidate.name}</th>
                    <td>{applicant.job.title}</td>
                    <td>
                      <span
                        className={`badge text-white ${
                          applicant.status === "Approved"
                            ? "bg-success"
                            : applicant.status === "Rejected"
                            ? "bg-danger"
                            : "bg-secondary"
                        }`}
                      >
                        {applicant.status}
                      </span>
                    </td>
                    <td>
                      {applicant.status === "Approved" ? (
                        <span className="text-success">
                          <b>Application Approved</b>
                        </span>
                      ) : (
                        <button
                          className="btn btn-outline-success"
                          onClick={() => setSelectedApplicant(applicant)}
                        >
                          View Details
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {selectedApplicant && (
        <div className="modal show d-block">
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Applicant Details</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setSelectedApplicant(null)}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  <strong>Name: </strong> {selectedApplicant.candidate.name}
                </p>
                <p>
                  <strong>Email: </strong> {selectedApplicant.candidate.email}
                </p>
                <p>
                  <strong>Letter: </strong> {selectedApplicant.candidate.letter}
                </p>
                <p>
                  <strong>Website: </strong>
                  <a
                    href={selectedApplicant.candidate.website_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {selectedApplicant.candidate.website_url}
                  </a>
                </p>
                <p>
                  <strong>Applied Date: </strong>{" "}
                  {new Date(
                    selectedApplicant.candidate.applied_date
                  ).toLocaleDateString()}
                </p>
                <p>
                  <strong>CV: </strong>
                  <a
                    href={selectedApplicant.candidate.cv}
                    download
                    className="btn btn-success text-white"
                  >
                    Download CV
                  </a>
                </p>
                <div className="mb-3">
                  <label htmlFor="status" className="form-label">
                    Update Status:
                  </label>
                  <select
                    id="status"
                    className="form-select"
                    value={selectedApplicant.candidate.status}
                    onChange={(e) =>
                      setSelectedApplicant({
                        ...selectedApplicant,
                        candidate: {
                          ...selectedApplicant.candidate,
                          status: e.target.value,
                        },
                      })
                    }
                  >
                    <option value="Pending">Pending</option>
                    <option value="Approved">Approved</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setSelectedApplicant(null)}
                >
                  Close
                </button>
                <button
                  className="btn btn-success"
                  onClick={() =>
                    handleStatusChange(selectedApplicant.candidate.status)
                  }
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Applicant;
