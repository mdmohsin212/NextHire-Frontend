import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMessage,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Footer from './Footer';

class Contact extends Component {
    render() {
        return (
          <div>
            <div className="container py-5">
              <div className="text-center mb-5">
                <h1>Contact For Any Query</h1>
              </div>
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="d-flex align-items-center small-bg rounded p-3">
                    <div
                      className="bg-white border rounded d-flex align-items-center justify-content-center me-3"
                      style={{ width: "45px", height: "45px" }}
                    >
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        style={{ color: "#63E6BE" }}
                      />
                    </div>
                    <span>Narayanganj, Bangladesh</span>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="d-flex align-items-center small-bg rounded p-3">
                    <div
                      className="bg-white border rounded d-flex align-items-center justify-content-center me-3"
                      style={{ width: "45px", height: "45px" }}
                    >
                      <FontAwesomeIcon
                        icon={faMessage}
                        style={{ color: "#63E6BE" }}
                      />
                    </div>
                    <span>siam.mohsin2005@gmail.com</span>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="d-flex align-items-center small-bg rounded p-3">
                    <div
                      className="bg-white border rounded d-flex align-items-center justify-content-center me-3"
                      style={{ width: "45px", height: "45px" }}
                    >
                      <FontAwesomeIcon
                        icon={faPhone}
                        style={{ color: "#63E6BE" }}
                      />
                    </div>
                    <span>+8801627568419</span>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        );
    }
}

export default Contact;
