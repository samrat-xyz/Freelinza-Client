import axios from "axios";
import React, { useEffect, useState } from "react";
import JobsCard from "../../components/JobsCard/JobsCard";
import Loading from "../../components/Loading/Loading";

function AllJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios("http://localhost:3030/all-jobs")
    .then(data =>{
        setJobs(data.data)
        setLoading(false)
    })
  }, []);
  return (
    <div className="my-6 p-3 bg-base-100">
        <h1 className="heading-style mb-6 text-center">All Available Jobs</h1>
       {loading ? (
        <Loading></Loading>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          {jobs.map((job) => (
            <JobsCard job={job} key={job._id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default AllJobs;
