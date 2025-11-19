
const LOCAL_BASE_URL = "http://localhost:3000"; 
const PROD_BASE_URL = "https://dynamic-quotation-system-server.vercel.app";

export const BASE_URL =
    window.location.hostname === "localhost" ? LOCAL_BASE_URL : PROD_BASE_URL;

export const API_PATHS = {
    AUTH: {
        SIGNUP: "/api/v1/auth/signup",
        LOGIN: "/api/v1/auth/login",
        GET_USER_INFO: "/api/v1/auth/getuser",
        GET_ALL_USER: '/api/v1/auth/getalluser'
    },
   
   

};
