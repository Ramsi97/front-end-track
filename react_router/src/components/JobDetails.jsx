import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const JobDetails = () => {
    const jobDetails = useLoaderData()
    console.log(jobDetails)
  return (
    <div className='job-details'>
        <p><b>Job Title: </b>{jobDetails.title}</p>
        <p><b>Salary : </b>{jobDetails.salary}</p>
        <p><b>Location : </b>{jobDetails.location}</p>
        <p><b>Description : </b>Develop modern React applications. Strong JS/TS, Hooks, and API skills needed. Remote role with good pay and flexible schedule."</p>
        <button>Apply Now</button>
    </div>
  )
}

export default JobDetails

export const JobDetailsLoader = async ({params}) => {
    const {id} = params
    const res = await fetch("http://localhost:5000/jobs/" + id)
    if(!res.ok){ 
        throw Error("Could not fetch the job details")
    }
    return res.json()
}