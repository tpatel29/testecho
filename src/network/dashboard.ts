import axios from "axios";


export async function getUserProfile(): Promise<UserProfile> {
    const { data } = await axios.get('/profile/')
    return data as UserProfile
}

export async function regenerateApiKey(): Promise<string> {
    const { data } = await axios.post('/profile/regenerate/apikey/')
    return "key_" + data.apikey
}

export async function regenerateWhsec(): Promise<string> {
    const { data } = await axios.post('/profile/regenerate/whsec/')
    return data.whsecret
}

export async function getJobList(): Promise<JobCard[]> {
    const { data } = await axios.get('/jobs/')
    return data
}

export async function getJobDetail(jobId: string): Promise<Job> {
    const { data } = await axios.get(`/jobs/${jobId}/`)
    return data as Job
}




export type UserProfile =  {
    _id: string;
    email: string;
    active: boolean;
    acceptedTerms: boolean;
    stripePM?: any;
    created: Date;
    apiKey: string;
    whsecret: string;
}

export type JobCard = { 
    _id: string
    created: string
    trigger: string
    deleted: boolean
    completed: string
}

export type Job = {
    _id: string
    created: Date
    trigger: Date
    deleted: boolean
    completed: boolean

    attempt: {
        max: number
        interval: string
    }

    request: {
        type: 'HTTP',
        method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
        to: string,
        headers: object,
        body: string
    }

    retries: number,
    totalResponseTime: number,

    responses: {
        timeInitiated: Date,
        responseTime: number,
        code: number,
        body: string,
    }[]
}
