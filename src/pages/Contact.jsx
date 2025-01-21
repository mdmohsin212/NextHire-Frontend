import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMessage,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";
import { NavLink } from 'react-router-dom';


const Contact = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="contact-container mt-5 w-75 h-75 m-auto rounded-4">
        <div className="row">
          <div className="col-md-6">
            <div className="contact-form">
              <h2 className="form-title text-center">Get in Touch</h2>
              <form method="POST" className="contact-form" id="contact-form">
                <div className="mb-3">
                  <label htmlFor="Name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    name="Name"
                    id="Name"
                    className="form-control"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="Email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    name="Email"
                    id="Email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="Message" className="form-label">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    name="Message"
                    id="Message"
                    className="form-control"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <div className="d-grid">
                  <NavLink
                    type="submit"
                    name="send"
                    id="send"
                    to="/"
                    className="btn btn-primary"
                    style={{ backgroundColor: "#00b074" }}
                  >
                    Send
                  </NavLink>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center">
            <img
              src="images/contact.svg"
              className="img-fluid rounded-3 w-75"
              alt="Contact illustration"
            />
          </div>
        </div>
        <div className="row mt-2 text-center">
          <div className="col-md-4">
            <div className="d-flex flex-column align-items-center rounded p-3">
              <div
                className="bg-white border rounded-circle d-flex align-items-center justify-content-center mb-3"
                style={{ width: "60px", height: "60px" }}
              >
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{ color: "#63E6BE", fontSize: "24px" }}
                />
              </div>
              <h6 className="fw-bold">Phone</h6>
              <p>
                The phrasal sequence of the is now so that <br /> many campaign
                and benefit
              </p>
              <p className="mb-0 bg fw-bold">+8801627568419</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex flex-column align-items-center rounded p-3">
              <div
                className="bg-white border rounded-circle d-flex align-items-center justify-content-center mb-3"
                style={{ width: "60px", height: "60px" }}
              >
                <FontAwesomeIcon
                  icon={faMessage}
                  style={{ color: "#63E6BE", fontSize: "24px" }}
                />
              </div>
              <h6 className="fw-bold">Email</h6>
              <p>
                The phrasal sequence of the is now so that <br /> many campaign
                and benefit
              </p>
              <p className="mb-0 fw-bold bg">siam.mohsin2005@gmail.com</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex flex-column align-items-center rounded p-3">
              <div
                className="bg-white border rounded-circle d-flex align-items-center justify-content-center mb-3"
                style={{ width: "60px", height: "60px" }}
              >
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ color: "#63E6BE", fontSize: "24px" }}
                />
              </div>
              <h6 className="fw-bold">Address</h6>
              <p>
                The phrasal sequence of the is now so that <br /> many campaign
                and benefit
              </p>
              <p className="mb-0 fw-bold bg">
                25/12 Bandar, Narayanganj, Bangladesh
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;