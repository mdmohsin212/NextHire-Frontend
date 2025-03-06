import React, { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationCrosshairs,
  faClock,
  faMoneyBill,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation, Link } from "react-router-dom";
import Footer from "./Footer";
import { JobContext } from "../context/JobContext";

const ShowJob = () => {
  const { jobs, loading } = useContext(JobContext);
  const [filter, setFilter] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const location = useLocation();

  const LastItem = currentPage * itemsPerPage;
  const FirstItem = LastItem - itemsPerPage;
  const currentItems = filter.slice(FirstItem, LastItem);
  const totalPages = Math.ceil(filter.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setFilter(jobs);
  }, [jobs]);

  const filterJobs = (jobType) => {
    if (jobType === "all") {
      setFilter(jobs);
    } else {
      const filteredJobs = jobs.filter((job) => job.job_type === jobType);
      setFilter(filteredJobs);
    }
    setCurrentPage(1);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container-xxl py-3 flex-grow-1">
        <div className="container">
          <h1 className="text-center mb-3">Job Listing</h1>
          <div className="mb-4 text-center">
            <div className="btn-group pb-2 pt-2" role="group">
              {["all", "Full Time", "Part Time", "Remote"].map((type) => (
                <button
                  key={type}
                  className="btn btn-outline-success"
                  onClick={() => filterJobs(type)}
                >
                  {type}
                </button>
              ))}
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
              {currentItems.map((item) => (
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
                  {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      key={index}
                      onClick={() => handlePageChange(index + 1)}
                      className="btn btn-outline-success mx-1"
                    >
                      {index + 1}
                    </button>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShowJob;