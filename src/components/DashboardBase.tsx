import { storageKeys } from '../constants';
import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';


// Require Auth for all dashboard pages
export default function DashboardBase() {
    const navigate = useNavigate()
    
    useEffect(() => {
        if(!localStorage.getItem(storageKeys.ID_TOKEN)) {
            // navigate("/") // TODO remove this when ready; commented while building
        }
    })

    return (
        <Outlet/>
    )
}
