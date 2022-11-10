import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { getUserProfile, regenerateApiKey, regenerateWhsec } from 'network/dashboard'
import { SecretRegenerateableValue } from 'components/SecretRegenerateableValue'


export default function Dashboard() {
    const { data, isLoading, isError } = useQuery(['profile'], getUserProfile)

    if(isLoading) {
        return <p>loading...</p>
    }

    if(isError) {
        return <p>ERROR</p>
    }

    return (
        <div>
            <h1>Dashboard Index</h1>
            <h1>{data.email}</h1>
            <Link to="/dashboard/jobs">Jobs</Link>
            <SecretRegenerateableValue name="API Key" val={data.apiKey} regenerate={regenerateApiKey} />
            <SecretRegenerateableValue name="Webhook Secret" val={data.whsecret} regenerate={regenerateWhsec} />
        </div>
    )
}

