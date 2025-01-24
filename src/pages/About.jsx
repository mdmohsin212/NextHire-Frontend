import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Accordion from "./Accrodian";

const About = () => {
  const location = useLocation();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`https://nexthire-backend.onrender.com/job/list/`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="row g-0 about-bg rounded overflow-hidden">
                <div className="col-6 text-start">
                  <img
                    className="img-fluid w-100"
                    src="images/about-1.jpg"
                    alt=""
                  />
                </div>
                <div className="col-6 text-start">
                  <img
                    className="img-fluid"
                    src="images/about-2.jpg"
                    alt=""
                    style={{ width: "85%", marginTop: "15%" }}
                  />
                </div>
                <div className="col-6 text-end">
                  <img
                    className="img-fluid"
                    src="images/about-3.jpg"
                    alt=""
                    style={{ width: "85%" }}
                  />
                </div>
                <div className="col-6 text-end">
                  <img
                    className="img-fluid w-100"
                    src="images/about-4.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4">
                We Connect Professionals with Opportunities
              </h1>
              <p className="mb-4">
                We strive to provide exceptional services that match top talent
                with rewarding job opportunities. Our commitment is to ensure a
                seamless experience for both employers and job seekers.
              </p>
              <p>
                <FontAwesomeIcon icon={faCheck} style={{ color: "#00b074" }} />
                <i className="fa fa-check text-primary me-3"></i>Extensive
                database of skilled professionals
              </p>
              <p>
                <FontAwesomeIcon icon={faCheck} style={{ color: "#00b074" }} />
                <i className="fa fa-check text-primary me-3"></i>Dedicated
                support for both employers and job seekers
              </p>
              <p>
                <FontAwesomeIcon icon={faCheck} style={{ color: "#00b074" }} />
                <i className="fa fa-check text-primary me-3"></i>Focused
                approach to career advancement
              </p>

              {location.pathname === "/" ? (
                <a className="btn btn-success py-3 px-5 mt-3" href="#">
                  Learn More
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <div className="mb-3 statistics-section">
        <div className="container text-center">
          <div className="row justify-content-around text-center gap-3">
            <div className="col-md-3 col-12">
              <h2 className="fw-bold display-4 bg">{jobs.length}+</h2>
              <p className="text-muted">Jobs Available</p>
            </div>
            <div className="col-md-3 col-12">
              <h2 className="fw-bold display-4 bg">15+</h2>
              <p className="text-muted">Partner Companies</p>
            </div>
            <div className="col-md-3 col-12">
              <h2 className="fw-bold display-4 bg">1+</h2>
              <p className="text-muted">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center pb-3">
          <h3>Questions & Answers</h3>
          <p>
            Search all the open positions on the web. Get your own personalized
            salary <br /> estimate. Read reviews on over 5000+ companies
            worldwide.
          </p>
        </div>
        <Accordion />
      </div>
      {location.pathname === "/about" && <Footer />}
    </div>
  );
};

export default About;
