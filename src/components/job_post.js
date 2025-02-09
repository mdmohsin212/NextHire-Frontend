import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const JobPostHandel = (event) => {
  event.preventDefault();
  const title = getData("job-title");
  const loaction = getData("location");
  const vacancy = getData("vacancy");
  const description = getData("description");
  const requirment = getData("requirement");
  const job_type = getData("JobType");
  const salary = getData("salary");
  const company = getData("companies");
  const employer = localStorage.getItem("user_id");

  const data = {
    employer: employer,
    company: company,
    title: title,
    description: description,
    requirment: requirment,
    loaction: loaction,
    vacancy: vacancy,
    job_type: job_type,
    salary: salary,
  };

  if (
    title &&
    description &&
    requirment &&
    loaction &&
    vacancy &&
    job_type &&
    salary &&
    company
  ) {
    fetch("https://nexthire-backend.vercel.app/job/list/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          toast.success("Jobs Posted Successfully");
        } else {
          toast.error("Something is wrong");
        }
      })
      .catch((error) => console.log(error));
    console.log(data);
  } else {
    toast.error("Please fill in all required fields for job post.");
  }

};

export const JobDeleteHandel = (event, id) => {
  event.preventDefault();
  fetch(`https://nexthire-backend.vercel.app/job/list/${id}/`, {
    method: "DELETE",
  })
    .then((res) => {
      if (res.ok) {
        console.log("job deleted");
        window.location.href = "/";
      }
    })
    .catch((error) => console.log(error));
};

export const getData = (id) => {
  const data = document.getElementById(id).value;
  return data;
};
