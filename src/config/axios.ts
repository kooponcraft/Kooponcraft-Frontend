import axios from 'axios';

const viewRoutes = ["/initiate-coupon-swap", "/getCoupon", "/getItem", "/collection"]

const appAxios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    // timeout: 5000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    }
});


appAxios.interceptors.request.use((config) => {
    const isViewRoute = viewRoutes.some(route => config.url?.startsWith(route));

    if (isViewRoute && config.baseURL) {
        const baseUrl = new URL(config.baseURL);
        
        if (baseUrl.pathname.endsWith('/api')) {
            baseUrl.pathname = baseUrl.pathname.slice(0, -4);
        }
        else if (baseUrl.pathname.includes('/api/')) {
            baseUrl.pathname = baseUrl.pathname.replace('/api/', '/');
        }

        config.baseURL = `${baseUrl.protocol}//${baseUrl.host}${baseUrl.pathname}`;
    }

    return config;
});

export default appAxios;