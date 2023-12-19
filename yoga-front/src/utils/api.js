import axios from 'axios';


//create base url for api with axios
const api = axios.create({
  baseURL: "http://localhost:5000"
});

export default api;