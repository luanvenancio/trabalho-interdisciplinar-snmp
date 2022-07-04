import axios from 'axios';
import { stringify } from 'qs';

const api = axios.create({
    baseURL: 'http://localhost:5000/api/',
    paramsSerializer: (data) => stringify(data),
});



export default api;