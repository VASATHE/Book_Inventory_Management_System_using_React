import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8083/api/books",
});

export const getAllBooks = () => API.get("");
export const getBookById = (id) => API.get(`/${id}`);
export const addBook = (book) => API.post("", book);
export const updateBook = (id, book) => API.put(`/${id}`, book);
export const deleteBookById = (id) => API.delete(`/${id}`);
