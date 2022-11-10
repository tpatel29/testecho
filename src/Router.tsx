import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from 'pages/home';
import Dashboard from 'pages/dashboard/index';
import JobsList from 'pages/dashboard/jobs';
import Docs from 'pages/docs';
import JobDetail from 'pages/dashboard/job_detail';
import DashboardBase from 'components/DashboardBase';



export default function Router(): JSX.Element {
    return (
        <Routes>
            <Route path='/' index element={<Home />}/>
            <Route path='/docs' index element={<Docs />}/>

            <Route path='/dashboard' element={<DashboardBase />} >
                <Route index element={<Dashboard />} />
                <Route path='jobs' element={<JobsList />}/>
                <Route path='job/:jobId' element={<JobDetail />}/>
            </Route>

            <Route path="*" element={<h1>404</h1>} />
        </Routes>
    )
}
