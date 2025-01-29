import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ShowJob from "./Job";
import Footer from "./Footer";
import About from "../pages/About";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  return (
    <div>
      <ToastContainer position="top-center" />
      <div className="container-fluid p-md-1 p-2">
        <div className="position-relative">
          <img
            className="img-fluid custom-img"
            src="/images/sub2.jpg"
            alt="Job Search Banner"
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center bg-dark bg-opacity-50">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-8">
                  <h1 className="display-3 text-white mb-4 pt-md-2 pt-2">
                    Find The Perfect Job That You Deserve
                  </h1>
                  <p className="fs-5 text-white mb-4 d-none d-md-block">
                    Empower your professional growth with our curated job
                    listings tailored to your expertise.
                  </p>
                  <a
                    href="/jobs"
                    className="btn btn-outline-success btn-lg text-white"
                    style={{ border: "0.01px solid white" }}
                  >
                    Find Job
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center my-3">
          <ShowJob />
        </div>
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
