import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Authentication API
export const register = (userData) => API.post("/auth/register", userData);
export const login = (userData) => API.post("/auth/login", userData);
export const getProfile = () => API.get("/auth/profile");

// Project Management API
export const getProjects = () => API.get("/projects").then((res) => res.data);
export const createProject = (project) => API.post("/projects", project).then((res) => res.data);
export const updateProject = (id, project) => API.put(`/projects/${id}`, project).then((res) => res.data);
export const deleteProject = (id) => API.delete(`/projects/${id}`);

// TASK MANAGEMENT API FUNCTIONS
export const getTasks = () => API.get('/tasks');
export const createTask = (taskData) => API.post('/tasks', taskData);
export const updateTask = (id, taskData) => API.put(`/tasks/${id}`, taskData);
export const deleteTask = (id) => API.delete(`/tasks/${id}`);