import axios from 'axios';
import storage from './storage';

// Set Default base url of request
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ?
        'https://favvle-server.herokuapp.com' :
        'http://localhost:8000';

// Returns only data of response by default
axios.interceptors.response.use(response => {
    return response.data;
}, error => {
    return Promise.reject(error);
});

// Set authorization token
axios.interceptors.request.use(
    config => {
        const token = storage.getAuthToken();
        if (token) {
            config.headers['Authorization'] = token;
        }
        return config;
    },
    error => {
        Promise.reject(error)
    }
);