import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Profile = () => {
    const [info, setInfo] = useState([]);
    const id = localStorage.getItem("user_id");

      useEffect(() => {
        fetch(`https://nexthire-backend.onrender.com/user/profile/?id=${id}`)
          .then((response) => response.json())
          .then((data) => {
            setInfo(data[0].user);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }, []);

      return(
        <>
        <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-lg border-0 rounded-lg">
              <div className="card-header text-center text-white btn-bg">
                <h3 className="card-title m-0">Profile</h3>
              </div>
              <div className="card-body text-center">
                <div className="mb-4">
                  <img
                    src="src/images/pic.jpg"
                    alt="Profile"
                    className="rounded-circle img-thumbnail shadow-sm w-25"
                  />
                </div>
                <hr />
                <div className="text-start ps-5">
                  <p>
                    <strong className="bg">Name : </strong>
                    <span>
                      {info.first_name} {info.last_name}
                    </span>
                  </p>
                  <p>
                    <strong className="bg">Email : </strong>
                    <span>{info.email}</span>
                  </p>
                  <p>
                    <strong className="bg">Username : </strong>
                    <span>{info.username}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
      );
}

export default Profile;