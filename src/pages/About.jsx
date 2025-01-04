import React from "react";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const location = useLocation();

  console.log(location);

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
                <a className="btn btn-primary py-3 px-5 mt-3" href="#">
                  Learn More
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {location.pathname === "/about" && <Footer />}
    </div>
  );
};

export default About;
