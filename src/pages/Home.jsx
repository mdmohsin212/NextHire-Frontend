import React, {useState, useEffect, useContext} from "react";
import Footer from "./Footer";
import About from "../pages/About";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import { JobContext } from "../context/JobContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationCrosshairs,
  faClock,
  faMoneyBill,
  faUserTie,
  faSearch
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const { jobs, loading } = useContext(JobContext);
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState("");
  const [jobType, setJobType] = useState("all");


  useEffect(() => {
    let filteredJobs = jobs;
    if (jobType !== "all") {
      filteredJobs = filteredJobs.filter((job) => job.job_type === jobType);
    }
    if (search) {
      filteredJobs = filteredJobs.filter(
        (job) =>
          job.title.toLowerCase().includes(search.toLowerCase()) ||
          job.location.toLowerCase().includes(search.toLowerCase()) ||
          job.job_type.toLowerCase().includes(search.toLowerCase()) ||
          job.salary.toString().includes(search)
      );
    }
    setFilter(filteredJobs.slice(0,3));
  }, [jobs, jobType, search]);

  return (
    <div style={{ fontFamily: "Roboto, sans-serif" }}>
      <ToastContainer position="top-center" />
      <div className="container-fluid p-md-1 p-2">
        <div className="position-relative">
          <img
            className="img-fluid custom-img"
            src="/images/m2.svg"
            alt="Job Search Banner"
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center bg-opacity-50">
            <div className="container text-center">
              <div className="row">
                <div className="col-12 col-lg-8 mx-auto">
                  <h1 className="display-3 text-black mb-4 pt-md-2 pt-2">
                    Find The Perfect Job That You Deserve
                  </h1>
                  <p className="fs-5 text-black mb-4 d-none d-md-block">
                    The most complete job portal software having over 1 million
                    unique visitors every day with verified, up-to-date job
                    listings directly from the employers.
                  </p>
                  <a
                    href="/jobs"
                    className="btn btn-outline-success btn-lg text-black hero-btn"
                  >
                    Find Job
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center pt-3">
          <div className="container">
            <h1 className="text-center mb-3">Featured Jobs</h1>

            <div className="row mb-4">
              <div className="col-md-6">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search by title, location, salary, or job type..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <span className="input-group-text">
                    <FontAwesomeIcon icon={faSearch} />
                  </span>
                </div>
              </div>
              <div className="col-md-6 text-md-end mt-2 mt-md-0">
                <select
                  className="form-select w-auto d-inline-block"
                  value={jobType}
                  onChange={(e) => setJobType(e.target.value)}
                >
                  <option value="all">All Jobs</option>
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                  <option value="Remote">Remote</option>
                </select>
              </div>
            </div>

            {loading ? (
              <div className="d-flex justify-content-center py-5">
                <div className="spinner-border text-dark" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : filter.length === 0 ? (
              <h3 className="text-center">No Jobs Available</h3>
            ) : (
              <div>
                {filter.map((item) => (
                  <div key={item.id} className="p-4 mb-4 border rounded">
                    <div className="row g-4">
                      <div className="col-md-8 d-flex align-items-center">
                        <img
                          className="img-fluid border rounded"
                          src={item.company_img}
                          alt={item.title}
                          style={{ width: "80px", height: "80px" }}
                        />
                        <div className="text-start ps-4">
                          <h5 className="mb-3">{item.title}</h5>
                          <span className="me-3">
                            <FontAwesomeIcon
                              icon={faLocationCrosshairs}
                              style={{ color: "#63E6BE", marginRight: "6px" }}
                            />{" "}
                            {item.location}
                          </span>
                          <span className="me-3">
                            <FontAwesomeIcon
                              icon={faClock}
                              style={{ color: "#63E6BE", marginRight: "6px" }}
                            />{" "}
                            {item.job_type}
                          </span>
                          <span>
                            <FontAwesomeIcon
                              icon={faMoneyBill}
                              style={{ color: "#63E6BE", marginRight: "6px" }}
                            />{" "}
                            ${item.salary}
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 d-flex flex-column align-items-md-end">
                        <small>
                          Upload Date:{" "}
                          {new Date(item.posted_date).toLocaleDateString()}
                        </small>
                        <div className="d-flex mb-3 mt-3 gap-2">
                          <Link
                            to={`/job_details/${item.id}`}
                            className="btn btn-primary"
                            style={{ backgroundColor: "#00b074" }}
                          >
                            <FontAwesomeIcon icon={faUserTie} /> Job Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="text-center mt-4">
                  <Link
                    to="/jobs"
                    className="btn btn-success btn-lg px-3 rounded-pill"
                  >
                    See More Jobs
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
