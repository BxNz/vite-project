import axios,{AxiosResponse } from "axios";

const API_URL = import.meta.env.VITE_API_URL;
class LoginService {
  getLogin(): Promise<AxiosResponse > {
    return axios.get(`${API_URL}/Login`);
  }
  getLoginByid(id: string): Promise<any> {
    return axios.get(`${API_URL}/Login/${id}`);
  }
  createLogin(Product: any): Promise<any> {
    return axios.get(`${API_URL}/Login/`, Product);
  }
  updateLogin(id: string, Product: any): Promise<any> {
    return axios.put(`${API_URL}/Login/${id}`, Product);
  }
  deleteLogin(id: string): Promise<any> {
    return axios.delete(`${API_URL}/Login/${id}`);
  }
}
export default LoginService;
