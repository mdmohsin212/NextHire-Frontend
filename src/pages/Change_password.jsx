import React from "react";
import Footer from "./../pages/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProfileNav from './Side_nav';
import { PasswordChangeHandel } from "../components/job_application";


const ChangePassword = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <ToastContainer position="top-center" />
      <div className="d-flex flex-grow-1 flex-wrap flex-column flex-md-row">
        <div className="order-1 d-flex justify-content-center align-items-center text-center bg-light py-1">
          <ProfileNav />
        </div>

        <div className="container-fluid mt-4 col-12 col-md-10 order-2">
          <div className="w-100 w-md-75 m-auto">
            <form method="post" className="w-75 w-md-50 m-auto p-4 rounded">
              <h3 className="text-center mb-4">Change Password</h3>

              <div className="mb-3">
                <label htmlFor="previousPassword" className="form-label">
                  Previous Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="previousPassword"
                  placeholder="Enter Previous Password"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="newPassword" className="form-label">
                  New Password
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Password"
                  placeholder="Enter New Password"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="repeatPassword" className="form-label">
                  Repeat New Password
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="password2"
                  placeholder="Repeat New Password"
                  required
                />
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <button
                  type="submit"
                  className="btn btn-outline-success"
                  onClick={(e) => PasswordChangeHandel(e)}
                >
                  Change Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChangePassword;