import axios from 'axios';

const api = axios.create({
    baseURL:'http://localhost:3005'
});
console.log(api);

export default api;
