import React from "react";
import { UserLogin } from '/src/context/auth'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  return (
    <>
      <ToastContainer position="top-center" />
      <div class="sign-in mt-5 w-75 h-75 m-auto shadow-lg p-4 mb-5 bg-body-tertiary rounded-4">
        <div class="row">
          <div class="col-md-6">
            <div class="signin-form">
              <h2 class="form-title text-center">Sign In</h2>
              <form method="POST" class="register-form" id="login-form">
                <div class="mb-3">
                  <label for="Username" class="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    name="Username"
                    id="username-login"
                    class="form-control"
                    placeholder="Username"
                  />
                </div>
                <div class="mb-3">
                  <label for="your_pass" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="your_pass"
                    id="your_pass-login"
                    class="form-control"
                    placeholder="Password"
                  />
                </div>
                <div class="d-grid">
                  <button
                    type="submit"
                    name="signin"
                    id="signin"
                    class="btn btn-primary"
                    style={{ backgroundColor: "#00b074" }}
                    onClick={UserLogin}
                  >
                    Log in
                  </button>
                </div>
                <a
                  href="/signup"
                  class="d-block text-center mt-3 text-decoration-none"
                >
                  Create an account
                </a>
              </form>
            </div>
          </div>
          <div class="col-md-6 d-none d-md-flex align-items-center justify-content-center">
            <img
              src="public/images/signin-image.jpg"
              class="img-fluid rounded-3 w-50"
              alt="Sign in illustration"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
