import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./Profile";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const SeekerProfile = () => {
  const [application, setApplication] = useState([]);
  const id = localStorage.getItem("user_id");

  useEffect(() => {
    fetch(`https://nexthire-backend.onrender.com/job/list/?seeker_id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setApplication(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <>
      <Profile />
      <div className="w-75 m-auto">
        <h2 className="text-center pt-5 p-3 bg">My Application</h2>
        <hr />
        {application.length > 0 && (
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Title</th>
                <th>Location</th>
                <th>Job Type</th>
                <th>Job</th>
              </tr>
            </thead>
            <tbody>
              {application.map(
                (applicantData) =>
                  applicantData.applicants.find(
                    (applicant) => applicant.job_seeker === parseInt(id)
                  ) && (
                    <tr key={applicantData.id}>
                      <td>{applicantData.title}</td>
                      <td>{applicantData.loaction}</td>
                      <td>{applicantData.job_type}</td>
                      <td>
                        <Link
                          to={`/job_details/${applicantData.id}`}
                          className="btn btn-primary"
                          style={{ backgroundColor: "#00b074" }}
                        >
                          View Job
                        </Link>
                      </td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
        )}
      </div>
      <Footer />
    </>
  );
};

export default SeekerProfile;
