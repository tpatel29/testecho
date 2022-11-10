import axios, { AxiosRequestConfig } from 'axios'
import { DOMAIN, storageKeys } from '../constants';


axios.defaults.baseURL = DOMAIN
axios.interceptors.request.use(onRequest, onError)


function onRequest(config: AxiosRequestConfig<any>): AxiosRequestConfig<any> {
    const jwt = localStorage.getItem(storageKeys.ID_TOKEN)

    config.headers!.Authorization = "Bearer " + jwt
    return config
}

function onError(error: any): any {
    return Promise.reject(error)
}

