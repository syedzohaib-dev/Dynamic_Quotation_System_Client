
const LOCAL_BASE_URL = "http://localhost:3000";
const PROD_BASE_URL = "https://dynamic-quotation-system-server.vercel.app";

export const BASE_URL =
    window.location.hostname === "localhost" ? LOCAL_BASE_URL : PROD_BASE_URL;

export const API_PATHS = {
    AUTH: {
        SIGNUP: "/api/v1/auth/signup",
        LOGIN: "/api/v1/auth/login",
        GET_USER: "/api/v1/auth/get-user",
        GET_ALL_USER: '/api/v1/auth/get-all-users'
    },
    QUOTATION: {
        CREATE: "/api/v1/quotation/create",
        GET_ALL: "/api/v1/quotation/get-all",
        GET_SINGLE: "/api/v1/quotation",
    }



};
