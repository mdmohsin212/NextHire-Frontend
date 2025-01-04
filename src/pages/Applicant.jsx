import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";

const Applicant = () => {
  const [applicant, setApplicant] = useState([]);
  const job_id = useParams().id;

  useEffect(() => {
    fetch(
      `https://nexthire-backend.onrender.com/resume/job_apply/?job_id=${job_id}`
    )
      .then((response) => response.json())
      .then((data) => {
        setApplicant(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [job_id]);

  return (
    <>
      <h2 className="text-center bg pt-4">All Applicant</h2>
      <div className="w-75 m-auto p-4">
        {applicant.length > 0 && (
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Website</th>
                <th>Applied Date</th>
                <th>CV</th>
              </tr>
            </thead>
            <tbody>
              {applicant.map((applicantData) => (
                <tr key={applicantData.id}>
                  <td>{applicantData.name}</td>
                  <td>{applicantData.email}</td>
                  <td>
                    <a
                      href={applicantData.website_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {applicantData.website_url}
                    </a>
                  </td>
                  <td>
                    {new Date(applicantData.applied_date).toLocaleDateString()}
                  </td>
                  <td>
                    <button className="btn btn-success">
                      <a
                        href={applicantData.cv}
                        download
                        rel="noopener noreferrer"
                        className="text-decoration-none text-white"
                      >
                        Download CV
                      </a>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Applicant;
