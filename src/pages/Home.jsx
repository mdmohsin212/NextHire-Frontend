import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ShowJob from "./Job";
import Footer from "./Footer";
import About from "./About";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {

  return (
    <div>
      <ToastContainer position="top-center" />
      <div className="container bg-white p-0">
        <div className="container-fluid p-0">
          <div className="owl-carousel header-carousel position-relative">
            <div className="owl-carousel-item position-relative">
              <img
                className="img-fluid"
                src="src/images/carousel-1.jpg"
                alt=""
              />
              <div
                className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                style={{ background: "rgba(43, 57, 64, .5)" }}
              >
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-10 col-lg-8">
                      <h1 className="display-3 text-white animated slideInDown mb-4">
                        Find The Perfect Job That You Deserved
                      </h1>
                      <p className="fs-5 fw-medium text-white mb-4 pb-2">
                        Empower your professional growth with our curated job
                        listings tailored to your expertise.
                      </p>
                      <a
                        href="#"
                        className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                      >
                        Search Job
                      </a>
                      <a
                        href="/jobs"
                        className="btn btn-secondary py-md-3 px-md-5 animated slideInRight"
                      >
                        Find Job
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ShowJob />
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
