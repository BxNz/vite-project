import axios,{AxiosResponse} from "axios";
const API_URL = import.meta.env.VITE_API_URL;

class UserService{

  getUser(): Promise<AxiosResponse> {
    return axios.get(`${API_URL}/User`);
  }
  getUserByid(id: string): Promise<AxiosResponse> {
    return axios.get(`${API_URL}/User/${id}`);
  }
  createUser(User: any): Promise<AxiosResponse> {
    return axios.get(`${API_URL}/User/`, User);
  }
  updateUser(id: string, User: any): Promise<AxiosResponse> {
    return axios.put(`${API_URL}/User/${id}`, User);
  }
  deleteUser(id: string): Promise<AxiosResponse> {
    return axios.delete(`${API_URL}/User/${id}`);
  }

}
export default new UserService();