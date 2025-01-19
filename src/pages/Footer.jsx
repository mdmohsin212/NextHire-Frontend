import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMessage,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-white footer mt-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Contact</h5>
            <p className="mb-2">
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ color: "#63E6BE", marginRight: "6px" }}
              />
              Narayanganj, Bangladesh
            </p>
            <p className="mb-2">
              <FontAwesomeIcon
                icon={faPhone}
                style={{ color: "#63E6BE", marginRight: "6px" }}
              />
              +8801627568419
            </p>
            <p className="mb-2">
              <FontAwesomeIcon
                icon={faMessage}
                style={{ color: "#63E6BE", marginRight: "6px" }}
              />
              siam.mohsin@gmail.com
            </p>
            <div className="d-flex pt-2">
              <a
                className="btn btn-outline-light btn-social me-2"
                href="https://github.com/mdmohsin212/"
                target="__blank"
              >
                <FontAwesomeIcon icon={faGithub} style={{ color: "#63E6BE" }} />
              </a>
              <a
                className="btn btn-outline-light btn-social me-2"
                href="https://www.facebook.com/profile.php?id=100082320175940"
                target="__blank"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{ color: "#63E6BE" }}
                />
              </a>
              <a
                className="btn btn-outline-light btn-social me-2"
                href="https://www.youtube.com/@MdMohsin-v6n"
                target="__blank"
              >
                <FontAwesomeIcon
                  icon={faYoutube}
                  style={{ color: "#63E6BE" }}
                />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 offset-lg-6 text-end">
            <h5 className="text-white mb-4">Quick Links</h5>
            <a
              className="btn btn-link text-white-50 text-decoration-none"
              href=""
            >
              About Us
            </a>
            <br />
            <a
              className="btn btn-link text-white-50 text-decoration-none"
              href=""
            >
              Privacy Policy
            </a>
            <br />
            <a
              className="btn btn-link text-white-50 text-decoration-none"
              href=""
            >
              Terms & Condition
            </a>
            <br />
            <a
              className="btn btn-link text-white-50 text-decoration-none"
              href=""
            >
              Contact Us
            </a>
            <br />
            <a
              className="btn btn-link text-white-50 text-decoration-none"
              href=""
            >
              Help
            </a>
          </div>
        </div>
      </div>

      <div className="copyright">
        <div className="row">
          <p className="text-center">NextHire © All Right Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
