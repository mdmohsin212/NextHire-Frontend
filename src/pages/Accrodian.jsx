import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faUserTie,
  faClipboardCheck,
  faHandshake,
  faFileAlt,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Accordion = () => {
  return (
    <div>
      <div className="container mb-4">
        <div id="accordion">
          <div className="card border-0">
            <div className="card-header p-0 border-0" id="heading-1">
              <button
                className="btn btn-link accordion-title border-0 collapse"
                data-bs-toggle="collapse"
                data-bs-target="#collapse-1"
                aria-expanded="false"
                aria-controls="collapse-1"
              >
                <FontAwesomeIcon icon={faBriefcase} className="me-4" />
                How can job seekers apply for multiple jobs?
              </button>
            </div>
            <div
              id="collapse-1"
              className="collapse show"
              aria-labelledby="heading-1"
              data-bs-parent="#accordion"
            >
              <div className="card-body accordion-body">
                Job seekers can browse the available job listings, select the
                ones they are interested in, and click the "Apply" button. They
                can also track their applications in their account dashboard.
              </div>
            </div>
          </div>

          <div className="card border-0">
            <div className="card-header p-0 border-0" id="heading-2">
              <button
                className="btn btn-link accordion-title border-0 collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#collapse-2"
                aria-expanded="false"
                aria-controls="collapse-2"
              >
                <FontAwesomeIcon icon={faUserTie} className="me-4" />
                How can employers post a job?
              </button>
            </div>
            <div
              id="collapse-2"
              className="collapse"
              aria-labelledby="heading-2"
              data-bs-parent="#accordion"
            >
              <div className="card-body accordion-body">
                Employers need to create an account or log in. After logging in,
                they can go to the "Post a Job" section, fill in the job
                details, and publish it to make it visible to job seekers.
              </div>
            </div>
          </div>

          <div className="card border-0">
            <div className="card-header p-0 border-0" id="heading-3">
              <button
                className="btn btn-link accordion-title border-0 collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#collapse-3"
                aria-expanded="false"
                aria-controls="collapse-3"
              >
                <FontAwesomeIcon icon={faClipboardCheck} className="me-4" />
                How does the hiring process work?
              </button>
            </div>
            <div
              id="collapse-3"
              className="collapse"
              aria-labelledby="heading-3"
              data-bs-parent="#accordion"
            >
              <div className="card-body accordion-body">
                Once a job seeker applies for a job, the employer can review
                their application, schedule interviews, and select a candidate.
                Notifications are sent to both parties throughout the process.
              </div>
            </div>
          </div>

          <div className="card border-0">
            <div className="card-header p-0 border-0" id="heading-4">
              <button
                className="btn btn-link accordion-title border-0 collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#collapse-4"
                aria-expanded="false"
                aria-controls="collapse-4"
              >
                <FontAwesomeIcon icon={faHandshake} className="me-4" />
                Is there a way to communicate directly with candidates?
              </button>
            </div>
            <div
              id="collapse-4"
              className="collapse"
              aria-labelledby="heading-4"
              data-bs-parent="#accordion"
            >
              <div className="card-body accordion-body">
                Yes, NextHire provides an in-app messaging feature that allows
                employers to communicate directly with candidates for further
                discussions.
              </div>
            </div>
          </div>

          <div className="card border-0">
            <div className="card-header p-0 border-0" id="heading-5">
              <button
                className="btn btn-link accordion-title border-0 collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#collapse-5"
                aria-expanded="false"
                aria-controls="collapse-5"
              >
                <FontAwesomeIcon icon={faFileAlt} className="me-4" />
                How can I update my resume or profile information?
              </button>
            </div>
            <div
              id="collapse-5"
              className="collapse"
              aria-labelledby="heading-5"
              data-bs-parent="#accordion"
            >
              <div className="card-body accordion-body">
                Job seekers can log in to their account, navigate to the
                "Profile" section, and update their resume or other personal
                details anytime.
              </div>
            </div>
          </div>

          <div className="card border-0">
            <div className="card-header p-0 border-0" id="heading-6">
              <button
                className="btn btn-link accordion-title border-0 collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#collapse-6"
                aria-expanded="false"
                aria-controls="collapse-6"
              >
                <FontAwesomeIcon icon={faComments} className="me-4" />
                How can I get support if I face any issues?
              </button>
            </div>
            <div
              id="collapse-6"
              className="collapse"
              aria-labelledby="heading-6"
              data-bs-parent="#accordion"
            >
              <div className="card-body accordion-body">
                You can contact our support team via the "Contact Us" section.
                We are available 24/7 to help you resolve any issues or answer
                your questions.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;