import React, { useEffect } from "react";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { showCategorie, showCompany } from "../components/app";
import { JobPostHandel } from "../components/job_post";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const JobPost = () => {
  useEffect(() => {
    showCategorie();
    showCompany();
  }, []);

  return (
    <>
      <ToastContainer position="top-center" />
      <div className="w-75 m-auto mb-4">
        <h1 className="text-center p-3 bg">Post a new job</h1>
        <form method="post" encType="multipart/form-data">
          <div className="row g-3">
            <div className="col-12 col-sm-6">
              <label htmlFor="" className="form-label fw-medium">
                Job Title
              </label>
              <input
                type="text"
                className="form-control"
                id="job-title"
                placeholder="Job Title"
              />
            </div>
            <div className="col-12 col-sm-6">
              <label htmlFor="" className="form-label fw-medium">
                Location
              </label>
              <input
                type="text"
                className="form-control"
                id="location"
                placeholder="Location"
              />
            </div>
            <div className="col-12 col-sm-6">
              <label htmlFor="" className="form-label fw-medium">
                Vacancy
              </label>
              <input
                type="text"
                className="form-control"
                id="vacancy"
                placeholder="Vacancy"
              />
            </div>

            <div className="col-12 col-sm-6">
              <label htmlFor="" className="form-label fw-medium">
                Company
              </label>
              <select className="form-control" id="companies"></select>
            </div>

            <div className="col-12">
              <label htmlFor="" className="form-label fw-medium">
                Description
              </label>
              <textarea
                className="form-control"
                rows="5"
                id="description"
                placeholder="Job Description"
              ></textarea>
            </div>

            <div className="col-12">
              <label htmlFor="" className="form-label fw-medium">
                Requirement
              </label>
              <textarea
                className="form-control mt-2"
                rows="5"
                id="requirement"
                placeholder="Job Requirement"
              ></textarea>
            </div>

            <div className="col-12 col-sm-6">
              <label htmlFor="" className="form-label fw-medium">
                Job type
              </label>
              <select className="form-control" id="JobType">
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Remote">Remote</option>
              </select>
            </div>

            <div className="col-12 col-sm-6">
              <label htmlFor="" className="form-label fw-medium">
                Salary
              </label>
              <input
                type="text"
                id="salary"
                className="form-control"
                placeholder="Salary"
              />
            </div>

            <div className="col-12">
              <button
                className="btn btn-primary w-100"
                type="submit"
                style={{ backgroundColor: "#00b074" }}
                onClick={JobPostHandel}
              >
                Post Job
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* job post end */}
      <Footer />
    </>
  );
};

export default JobPost;
