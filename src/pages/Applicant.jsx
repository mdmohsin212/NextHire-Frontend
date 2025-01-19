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
    setApplicants((prevApplicants) =>
      prevApplicants.map((applicant) =>
        applicant.id === selectedApplicant.id
          ? {
              ...applicant,
              candidate: { ...applicant.candidate, status: newStatus },
            }
          : applicant
      )
    );
    setSelectedApplicant(null);
    const data = {
      status: newStatus,
      applicant_name: selectedApplicant.applicant_name,
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
      .then((data) => window.location.href = `/applicant_list/${job_id}`)
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
          <div className="row">
            {applicants.map((applicantData) => (
              <div className="col-md-6 mb-4" key={applicantData.id}>
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h4 className="card-title bg">
                      {applicantData.candidate.name}
                    </h4>
                    <p className="card-text mb-1">
                      <strong>Email: </strong>
                      {applicantData.candidate.email}
                    </p>
                    <p className="card-text mb-1">
                      <strong>Website: </strong>
                      <a
                        href={applicantData.candidate.website_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {applicantData.candidate.website_url}
                      </a>
                    </p>
                    <p className="card-text mb-1">
                      <strong>Status: </strong>
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
                    <button
                      className="btn btn-outline-info mt-2"
                      onClick={() => setSelectedApplicant(applicantData)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedApplicant && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div
            className="modal-dialog modal-lg modal-dialog-centered"
            role="document"
          >
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
                  <strong>Name : </strong> {selectedApplicant.candidate.name}
                </p>
                <p>
                  <strong>Email : </strong> {selectedApplicant.candidate.email}
                </p>
                <p>
                  <strong>Letter : </strong>{" "}
                  <b>"{selectedApplicant.candidate.letter}"</b>
                </p>
                <p>
                  <strong>Website : </strong>
                  <a
                    href={selectedApplicant.candidate.website_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {selectedApplicant.candidate.website_url}
                  </a>
                </p>
                <p>
                  <strong>Applied Date : </strong>{" "}
                  {new Date(
                    selectedApplicant.candidate.applied_date
                  ).toLocaleDateString()}
                </p>
                <p>
                  <strong>CV : </strong>
                  <a
                    href={selectedApplicant.candidate.cv}
                    download
                    className="btn btn-success"
                    rel="noopener noreferrer"
                  >
                    Download CV
                  </a>
                </p>

                <div className="mb-3">
                  <label htmlFor="status" className="form-label">
                    Update Status :
                  </label>
                  <select
                    id="status"
                    className="form-select"
                    value={selectedApplicant.candidate.status || "Pending"}
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
                  className="btn btn-primary"
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
