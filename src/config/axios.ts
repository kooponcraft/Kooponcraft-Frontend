import axios from 'axios';

const appAxios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    // timeout: 5000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    }
});

export default appAxios;