import { createContext, useState, useEffect } from "react";

export const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [info, setInfo] = useState({});
  const id = localStorage.getItem("user_id");

  const [employeeJob, setemployeeJob] = useState([]);
  const [employeeJobloading, setemployeeJobloading] = useState(true);


  const [applicants, setApplicants] = useState([]);
  const [Applicantsloading, setApplicantsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://nexthire-backend.vercel.app/job/list/`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch(`https://nexthire-backend.vercel.app/user/profile/?id=${id}`)
      .then((response) => response.json())
      .then((data) => {
        setInfo(data[0].user);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [id]);

    useEffect(() => {
      fetch(`https://nexthire-backend.vercel.app/job/list/?employer_id=${id}`)
        .then((res) => res.json())
        .then((data) => {
          setemployeeJob(data);
          setemployeeJobloading(false);
        })
        .catch((error) => {
          console.error("Error:", error);
          setLoading(false);
        });
    }, [id]);

    useEffect(() => {
        setLoading(true);
        fetch(
          `https://nexthire-backend.vercel.app/job/applied_job/?employer_id=${id}`
        )
          .then((res) => res.json())
          .then((data) => {
            setApplicants(data.filter((job) => job.status === "Approved"));
            setApplicantsLoading(false);
          })
          .catch((error) => {
            console.error("Error:", error);
            setLoading(false);
          });
      }, [id]);

  return (
    <JobContext.Provider
      value={{
        jobs,
        loading,
        info,
        employeeJob,
        employeeJobloading,
        applicants,
        Applicantsloading,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};
