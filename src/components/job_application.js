import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const JobApplication = (event, job_id) => {
  event.preventDefault();
  const name = getData("applicant-name");
  const email = getData("applicant-email");
  const website = getData("applicant-website");
  const cv = document.getElementById("applicant-cv");
  const letter = getData("applicant-letter");
  const job_seeker_id = localStorage.getItem("user_id");

  const formData = new FormData();
  formData.append("job", job_id);
  formData.append("job_seeker", job_seeker_id);
  formData.append("name", name);
  formData.append("email", email);
  formData.append("website_url", website);
  formData.append("letter", letter);

  if (cv.files.length > 0) {
    const cvFile = cv.files[0];
    formData.append("cv", cvFile);
  }

  const userData = localStorage.getItem("token");
  const userid = localStorage.getItem("user_id");
  const userrole = localStorage.getItem("role");

  if (userData && userid && userrole != "Employer") {
    if (name && email && website && cv && letter) {
      fetch("https://nexthire-backend.onrender.com/resume/job_apply/", {
        method: "POST",
        headers: {},
        body: formData,
      }).then((res) => {
        if (res.ok) {
          toast.success("Job application succesful");
        }
        else{
          toast.error("something is wrong")
        }
      });
    } else {
      toast.error("Please fill in all required fields for job application.");
    }
  } else {
    if (userrole == "Employer") {
      toast.error("Please at first login as a job seeker for job application.");
        
    } else {
      window.location.href = "/login";
    }
  }
};

export const getData = (id) => {
  const data = document.getElementById(id).value;
  return data;
};
