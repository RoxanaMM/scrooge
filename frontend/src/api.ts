import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8080',  // Replace with the actual endpoint of your Dropwizard server
    headers: {
        'Content-Type': 'application/json',
    },
});

export default apiClient;
