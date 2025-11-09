import React, { useEffect, useState } from 'react'
import JobsCard from '../JobsCard/JobsCard'

function LatestJob() {
    const [jobs,setJobs] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3030/latest-jobs')
        .then(res => res.json())
        .then(data => setJobs(data))
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
