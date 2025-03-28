import React, { useState, useContext } from "react";
import ProfileNav from "./Side_nav";
import Footer from "./Footer";
import { JobContext } from "../context/JobContext";


const Profile = () => {
  const {info} = useContext(JobContext);
  const [isEditMode, setEditMode] = useState(false);
  const role = localStorage.getItem("role");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const EditMode = () => {
    setEditMode(!isEditMode);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="d-flex flex-grow-1 flex-wrap flex-column flex-md-row p-0 m-0">
        <div className="order-1 order-md-1 d-flex justify-content-center align-items-center text-start bg-light py-1">
          <ProfileNav />
        </div>

        <div className="container-fluid mt-4 col-12 col-md-10 order-2 order-md-2 pb-5 pt-md-2">
          <div className="container">
            <div className="main-body pt-3">
              <div className="row gutters-sm">
                <div className="col-md-4 mb-3">
                  <div className="card shadow">
                    <div className="card-body">
                      <div className="d-flex flex-column align-items-center text-center">
                        <div
                          className="d-flex align-items-center justify-content-center rounded-circle btn-bg text-white"
                          style={{
                            width: "120px",
                            height: "120px",
                            fontSize: "70px",
                          }}
                        >
                          {String(info.username)[0].toUpperCase()}
                        </div>
                        <div className="mt-3">
                          <h4>
                            {info.first_name} {info.last_name}
                          </h4>
                          <p className="text-secondary mb-1">{role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card mb-3 p-3 shadow">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Username</h6>
                        </div>
                        <div className="col-sm-9">
                          <p
                            className="text-secondary"
                            style={{
                              backgroundColor: "#effdf5",
                              padding: "10px",
                              borderRadius: "5px",
                              margin: "0",
                            }}
                          >
                            {info.username || "Username"}
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">First Name</h6>
                        </div>
                        <div className="col-sm-9">
                          <p
                            className="text-secondary"
                            style={{
                              backgroundColor: "#effdf5",
                              padding: "10px",
                              borderRadius: "5px",
                              margin: "0",
                            }}
                          >
                            {info.first_name || "First Name"}
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Last Name</h6>
                        </div>
                        <div className="col-sm-9">
                          <p
                            className="text-secondary"
                            style={{
                              backgroundColor: "#effdf5",
                              padding: "10px",
                              borderRadius: "5px",
                              margin: "0",
                            }}
                          >
                            {info.last_name || "Last Name"}
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Email</h6>
                        </div>
                        <div className="col-sm-9">
                          <p
                            className="text-secondary"
                            style={{
                              backgroundColor: "#effdf5",
                              padding: "10px",
                              borderRadius: "5px",
                              margin: "0",
                            }}
                          >
                            {info.email || "example@domain.com"}
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Phone</h6>
                        </div>
                        <div className="col-sm-9">
                          {isEditMode ? (
                            <input
                              type="text"
                              name="phone"
                              value={info.phone || ""}
                              onChange={handleInputChange}
                              className="form-control"
                            />
                          ) : (
                            <p
                              className="text-secondary"
                              style={{
                                backgroundColor: "#effdf5",
                                padding: "10px",
                                borderRadius: "5px",
                                margin: "0",
                              }}
                            >
                              {info.phone || "empty"}
                            </p>
                          )}
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Address</h6>
                        </div>
                        <div className="col-sm-9">
                          {isEditMode ? (
                            <input
                              type="text"
                              name="address"
                              value={info.address || ""}
                              onChange={handleInputChange}
                              className="form-control"
                            />
                          ) : (
                            <p
                              className="text-secondary"
                              style={{
                                backgroundColor: "#effdf5",
                                padding: "10px",
                                borderRadius: "5px",
                                margin: "0",
                              }}
                            >
                              {info.address || "empty"}
                            </p>
                          )}
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-12">
                          <button
                            className="btn btn-success"
                            onClick={EditMode}
                          >
                            {isEditMode ? "Save" : "Edit"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
