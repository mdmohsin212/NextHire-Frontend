import React, { useState, useEffect } from "react";
import Job from "./Job"; // Correct import for a file named 'Job.js'

const App = () => {
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    fetch("https://nexthire-backend.onrender.com/job/list/")
      .then((response) => response.json())
      .then((data) => {
        setJobData(data); // Set the fetched job data
      })
      .catch((error) => {
        console.error("Error fetching job data:", error);
      });
  }, []);

  return <Job jobs={jobData} />;
};

export default App;
