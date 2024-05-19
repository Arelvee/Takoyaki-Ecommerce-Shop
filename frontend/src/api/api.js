// frontend/src/api/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3001/api'; // Adjust the URL as needed

export const fetchProduct = () => {
    return axios.get(`${API_URL}/products`);
};

export const fetchProductById = (id) => {
    return axios.get(`${API_URL}/products/${id}`);
};

export const createProduct = (product) => {
    return axios.post(`${API_URL}/products`, product);
};

export const updateProduct = (id, product) => {
    return axios.put(`${API_URL}/products/${id}`, product);
};

export const deleteProduct = (id) => {
    return axios.delete(`${API_URL}/products/${id}`);
};
