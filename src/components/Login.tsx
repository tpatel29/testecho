import React, { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import { login } from "network/auth";
import { GOOGLE_CLIENT_ID, storageKeys } from "../constants";
import type { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';



export default function LoginButton(): JSX.Element {
    if(!localStorage.getItem(storageKeys.ID_TOKEN)) {
        return <GoogleLoginButton/>
    }
    return <GoogleLogoutButton/>
}



function GoogleLoginButton() {
    const navigate = useNavigate()

    useEffect(loadGapi)

    const onSuccess = useCallback(async (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
        const { tokenId } = response as GoogleLoginResponse // We not using GoogleLoginResponseOffline
        const { access_token } = await login(tokenId)
        localStorage.setItem(storageKeys.ID_TOKEN, access_token)
        navigate("/dashboard")
    }, [navigate])

    const onFailure = useCallback((error: any) => {
        // TODO this
    }, [])

    return (
        <GoogleLogin
            clientId={GOOGLE_CLIENT_ID}
            buttonText="Get Started with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
        />
    )
}

function GoogleLogoutButton() {
    const navigate = useNavigate()

    const onLogout = useCallback(() => {
        localStorage.clear()
        navigate("/")
    }, [navigate])

    return (
        <GoogleLogout className={'loginButton'}
            clientId={GOOGLE_CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={onLogout}
        />
    )
}


function loadGapi() {
    gapi.load('client:auth2', () => {
        gapi.client.init({ clientId: GOOGLE_CLIENT_ID, scope: 'email' });
    });
}
