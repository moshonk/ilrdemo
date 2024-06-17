import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const login = (credentials) => axios.post(`${API_URL}/auth/login`, credentials);
export const fetchPrescriptions = () => axios.get(`${API_URL}/prescriptions`);
// Add more API functions as needed
