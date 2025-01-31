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
                    className="btn btn-outline-success btn-lg text-black"
                    style={{ border: "0.01px solid black" }}
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
