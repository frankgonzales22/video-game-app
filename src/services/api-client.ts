

import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count: number,
    next: string | null;
    results: T[]
}

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        // key : 'feb2c65551cb47ae8431fd6bb1026e06'
        key: 'a38bb52c60504630a5e7136f1d49e649'
    }
})

class APIClient<T>{

    endpoint: string
    constructor(endpoint: string) {
        this.endpoint = endpoint
    }
    getAll = (config : AxiosRequestConfig) => {
        return axiosInstance
        .get<FetchResponse<T>>(this.endpoint, config)
        .then(res => res.data)
    }
}

export default APIClient