import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://fullstack-2025-11-backend.onrender.com',
});

export default instance