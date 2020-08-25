const { default: Axios } = require("axios")

import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333'
    //baseURL: '10.0.2.2'
});

export default api; 