import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Nav from "./pages/Nav";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import JobDeatils from "./pages/Job_deatils";
import JobPost from "./pages/Job_post";
import EmployeProfile from "./pages/Employ_profile";
import Applicant from "./pages/Applicant";
import SeekerProfile from "./pages/Seeker_profile";
import ShowJob from "./pages/Job";
import Profile from "./pages/Profile";
import ChangePassword from "./pages/Change_password";
import RunningJob from "./pages/Running_job";
import ChoisenCandate from "./pages/Choisen_candidate";
import CompleteJob from "./pages/Complete_job";
import { JobProvider } from "./context/JobContext";
import PrivateRoute from "./context/PrivateRoute";

function App() {
  return (
    <JobProvider>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/jobs" element={<ShowJob />} />
        <Route path="/job_details/:id" element={<JobDeatils />} />

        <Route
          path="/post_job"
          element={<PrivateRoute element={<JobPost />} />}
        />
        <Route
          path="/my_jobs"
          element={<PrivateRoute element={<EmployeProfile />} />}
        />
        <Route
          path="/applicant_list/:id"
          element={<PrivateRoute element={<Applicant />} />}
        />
        <Route
          path="/profile"
          element={<PrivateRoute element={<Profile />} />}
        />
        <Route
          path="/running_job"
          element={<PrivateRoute element={<RunningJob />} />}
        />
        <Route
          path="/applied_jobs"
          element={<PrivateRoute element={<SeekerProfile />} />}
        />
        <Route
          path="/choisen_candidate"
          element={<PrivateRoute element={<ChoisenCandate />} />}
        />
        <Route
          path="/change_password"
          element={<PrivateRoute element={<ChangePassword />} />}
        />
        <Route
          path="/complete_job"
          element={<PrivateRoute element={<CompleteJob />} />}
        />
      </Routes>
    </JobProvider>
  );
}

export default App;
