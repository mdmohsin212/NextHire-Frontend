import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationCrosshairs,
  faClock,
  faMoneyBill,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { JobDeleteHandel } from "../components/job_post";
import ProfileNav from "./Side_nav";
import { JobContext } from './../context/JobContext';


const EmployeProfile = () => {
  const {employeeJob, employeeJobloading} = useContext(JobContext)

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="d-flex flex-column flex-md-row flex-grow-1">
        <div className="order-1 order-md-1 d-flex justify-content-center align-items-center text-center bg-light py-1">
          <ProfileNav />
        </div>

        <div className="container-fluid mt-4 col-12 col-md-10 order-2 order-md-2 pb-5">
          <div className="p-3 m-auto">
            <h3 className="text-center p-2 fw-medium">My Jobs</h3>

            {employeeJobloading ? (
              <div className="d-flex justify-content-center py-5">
                <div className="spinner-border text-dark" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : employeeJob.length === 0 ? (
              <p className="text-center fw-medium">No jobs available.</p>
            ) : (
              employeeJob.map((item) => (
                <div key={item.id} className="p-4 mb-4 border rounded">
                  <div className="row g-4">
                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid border rounded"
                        src={item.company_img}
                        alt="Company"
                        style={{ width: "80px", height: "80px" }}
                      />
                      <div className="text-start ps-4">
                        <h5 className="mb-3">{item.title}</h5>
                        <span className="text-truncate me-3">
                          <FontAwesomeIcon
                            icon={faLocationCrosshairs}
                            style={{ color: "#63E6BE", marginRight: "6px" }}
                          />
                          {item.location}
                        </span>
                        <span className="text-truncate me-3">
                          <FontAwesomeIcon
                            icon={faClock}
                            style={{ color: "#63E6BE", marginRight: "6px" }}
                          />
                          {item.job_type}
                        </span>
                        <span className="text-truncate me-0">
                          <FontAwesomeIcon
                            icon={faMoneyBill}
                            style={{ color: "#63E6BE", marginRight: "6px" }}
                          />
                          ${item.salary}
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                      <small className="text-truncate">
                        Upload Date:{" "}
                        {new Date(item.posted_date).toLocaleDateString()}
                      </small>
                      <div className="d-flex mb-3 mt-3 gap-2">
                        <Link
                          className="btn btn-primary"
                          style={{ backgroundColor: "#00b074" }}
                          to={`/applicant_list/${item.id}`}
                        >
                          <FontAwesomeIcon icon={faUsers} className="me-2" />
                          See Applicant
                        </Link>
                        <Link
                          to="/"
                          className="btn btn-danger"
                          onClick={(e) => JobDeleteHandel(e, item.id)}
                        >
                          Delete
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default EmployeProfile;