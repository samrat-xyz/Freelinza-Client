import React, { useEffect, useState } from "react";
import axios from "axios";

import JobsCard from "../JobsCard/JobsCard";

function LatestJob() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios("https://freelinza-server.vercel.app/latest-jobs").then((data) =>
      setJobs(data.data)
    );
  }, []);

  return (
    <div className="pb-18 pt-6 bg-base-200 ">
      <h2 className="heading-style font-semibold text-center mb-6 ">
        Latest Jobs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {jobs.map((job) => (
          <JobsCard job={job} key={job._id}></JobsCard>
        ))}
      </div>
    </div>
  );
}

export default LatestJob;
