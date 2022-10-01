import axios from "axios";


const axiosinstance = axios.create({
    baseURL:"http://localhost:5000"
})

export default axiosinstance;
