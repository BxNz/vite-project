import axios, { AxiosResponse } from "axios";
const API_URL = import.meta.env.VITE_API_URL;

class ProductService {
  static getProducts() {
    throw new Error("Method not implemented.");
  }
  getProducts(): Promise<AxiosResponse> {
    return axios.get(`${API_URL}/Product`);
  }
  getProductsByid(id: string): Promise<AxiosResponse> {
    return axios.get(`${API_URL}/Product/${id}`);
  }
  createProducts(Product: any): Promise<AxiosResponse> {
    return axios.post(`${API_URL}/Product`, Product);
  }
  updateProducts(id: string, Product: any): Promise<AxiosResponse> {
    return axios.put(`${API_URL}/Product/${id}`, Product);
  }
  deleteProducts(id: string): Promise<AxiosResponse> {
    return axios.delete(`${API_URL}/Product/${id}`);
  }
}

export default new ProductService();
