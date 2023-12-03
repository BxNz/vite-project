import axios, { AxiosResponse } from "axios";
const API_URL = import.meta.env.VITE_API_URL;
const token = localStorage.getItem("token");
class ProductService {
  
  getAllProducts(): Promise<AxiosResponse> {
    return axios.get(`${API_URL}/product`, {
     headers: { Authorization: `Bearer ${token}` },
    });
  }

  getProductsByid(id: string): Promise<AxiosResponse> {
    return axios.get(`${API_URL}/product/${id}`);
  }
  createProducts(Product: any): Promise<AxiosResponse> {
    return axios.post(`${API_URL}/product`, Product);
  }
  updateProducts(id: string, Product: any): Promise<AxiosResponse> {
    return axios.put(`${API_URL}/product/${id}`, Product);
  }
  deleteProducts(id: string): Promise<AxiosResponse> {
    return axios.delete(`${API_URL}/product/${id}`);
  }
}

export default new ProductService();
