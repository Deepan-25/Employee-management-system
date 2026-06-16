import axios from "axios";

const API_URL = "http://localhost:8080/api/employees";

export const getEmployees = () => axios.get(API_URL);
