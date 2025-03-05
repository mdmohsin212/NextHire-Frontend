import React, { useEffect } from "react";
import { UserLogin } from '/src/context/auth'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {

  useEffect(() => {
    document.getElementById("job seeker").addEventListener("click", (event) => {
      document.getElementById("username-login").value = "mohsin416";
      document.getElementById("your_pass-login").value = 'SIAM123456';
    });

    document.getElementById("Employer").addEventListener("click", (event) => {
      document.getElementById("username-login").value = "mohsin417";
      document.getElementById("your_pass-login").value = 'SIAM123456';
    });

  })

  return (
    <>
      <ToastContainer position="top-center" />
      <div className="w-75 pt-5 mt-5 h-75 m-auto mb-5 rounded-4">
        <div className="row pt-5 ps-2">
          <div className="col-md-6">
            <div className="signin-form">
              <h1 className="form-title text-center">Sign In</h1>
              <div className="border rounded p-2 m-1">
                <h3 className="bg">For Testing</h3>
                <div className="d-flex gap-3 pb-3">
                  <button
                    className="btn"
                    id="job seeker"
                    style={{
                      backgroundColor: "#00b074",
                      color: "#fff",
                      border: "none",
                    }}
                  >
                    As Job Seeker
                  </button>
                  <button
                    className="btn"
                    id="Employer"
                    style={{
                      backgroundColor: "#00b074",
                      color: "#fff",
                      border: "none",
                    }}
                  >
                    As Employer
                  </button>
                </div>
              </div>
              <form method="POST" className="register-form" id="login-form">
                <div className="mb-3">
                  <label for="Username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    name="Username"
                    id="username-login"
                    className="form-control"
                    placeholder="Username"
                  />
                </div>
                <div className="mb-3">
                  <label for="your_pass" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="your_pass"
                    id="your_pass-login"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <div className="d-grid">
                  <button
                    type="submit"
                    name="signin"
                    id="signin"
                    className="btn btn-primary"
                    style={{ backgroundColor: "#00b074" }}
                    onClick={UserLogin}
                  >
                    Log in
                  </button>
                </div>
                <a
                  href="/signup"
                  className="d-block text-center mt-3 text-decoration-none text-success"
                >
                  Create an account
                </a>
              </form>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center">
            <img
              src="images/login.svg"
              className="img-fluid rounded-3 w-50"
              alt="Sign in illustration"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
