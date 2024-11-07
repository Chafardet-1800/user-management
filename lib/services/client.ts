import axios from 'axios';

export const client = axios.create({
    baseURL: import.meta.env.BASE_URL || "http://localhost:3000",
})