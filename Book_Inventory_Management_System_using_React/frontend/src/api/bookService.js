import axios from "axios";

const API = "http://localhost:8083/api/books";

const axiosInstance = axios.create({
  baseURL: API,
  withCredentials: true // ✅ IMPORTANT
});

export const getAllBooks = () => axiosInstance.get("");
export const getBookById = (id) => axiosInstance.get(`/${id}`);
export const addBook = (book) => axiosInstance.post("", book);
export const updateBook = (id, book) => axiosInstance.put(`/${id}`, book);
export const deleteBookById = (id) => axiosInstance.delete(`/${id}`);
export const getDashboard = () => axiosInstance.get("/dashboard");