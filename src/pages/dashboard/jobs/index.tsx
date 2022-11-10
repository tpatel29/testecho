import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getJobList, type JobCard } from 'network/dashboard'



export default function JobsList() {
    const { data, isLoading, isError } = useQuery(["jobs-list"], getJobList)

    if(isLoading) {
        return <h1>Loading ...</h1>
    }

    if(isError) {
        return <h1>Error</h1>
    }

    return (
        <div>
            <h1>JobsList</h1>
            <Link to="/dashboard/jobs/">Back</Link>
            {data.map((i: JobCard) => <JobInfoCard key={i._id} {...i} />)}
        </div>
    )
}




function JobInfoCard({ _id, created, deleted, trigger, completed }: JobCard) {
    return (
        <div>
            <Link to={`/dashboard/job/job_${_id}`}>job_{_id}</Link>
            {JSON.stringify({ _id, created, deleted, trigger, completed })}
            <br/>
        </div>
    )
}
