import React from 'react'
import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import { getJobDetail } from 'network/dashboard';


export default function JobDetail() {
    const { jobId } = useParams();

    const { data, isLoading, isError } = useQuery(["jobs-detail"], () => getJobDetail(jobId!))


    if(isLoading) {
        return <h1>Loading ...</h1>
    }

    if(isError) {
        return <h1>Error</h1> // just say 404
    }

    
    return (
        <div>
            <h1>Job Detail</h1>
            <p>{JSON.stringify(data)}</p>
            <Link to="/dashboard/jobs/">Back</Link>
        </div>
    )
}
