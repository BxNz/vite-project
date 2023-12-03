import axios, { AxiosResponse } from "axios";

const API_URL = import.meta.env.VITE_API_URL;
class authService {
  static login(data: any) : Promise<AxiosResponse>{
    return axios.post(`${API_URL}/Login`, data);
  }
  logout(): void {};
}
export default authService;
