
import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000,  
});

export default axiosInstance;




