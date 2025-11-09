import React, { useEffect, useState } from 'react'
import axios from 'axios';

import JobsCard from '../JobsCard/JobsCard'

function LatestJob() {
    const [jobs,setJobs] = useState([])
    useEffect(()=>{
        axios('http://localhost:3030/latest-jobs')
        .then(data => setJobs(data.data))
    })
  return (
    <div className=' p-3 bg-base-200'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 px-4'>
      {
        jobs.map(job => <JobsCard job={job} key={job._id}></JobsCard>)
      }
    </div>
    </div>
  )
}

export default LatestJob
