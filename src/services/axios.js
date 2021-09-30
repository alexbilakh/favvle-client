import axios from 'axios';

// Set Default base url of request
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ?
        'https://localhost:44335' :
        'https://localhost:44335';

// Returns only data of response by default
axios.interceptors.response.use(response => {
    return response.data;
}, error => {
    return Promise.reject(error);
});

// Set authorization token
axios.interceptors.request.use(
    config => {
        const token = '';
        if (token) {
            config.headers['Authorization'] = 'Favvle_ ' + token;
        }
        return config;
    },
    error => {
        Promise.reject(error)
    }
);