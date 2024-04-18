import { getEnvVariables } from "@helpers";
import axios from "axios";


const { VITE_API_URL } = getEnvVariables();


export const instance = axios.create({
    baseURL: VITE_API_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

instance.interceptors.request.use(config => {
    config.headers['x-token'] = localStorage.getItem('token') ?? '';

    

    return config;
});

