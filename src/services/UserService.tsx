import axios,{AxiosResponse} from "axios";
const API_URL = import.meta.env.VITE_API_URL;

class UserService{

  getUser(): Promise<AxiosResponse> {
    return axios.get(`${API_URL}/user`);
  }
  getUserByid(id: string): Promise<AxiosResponse> {
    return axios.get(`${API_URL}/user/${id}`);
  }
  createUser(User: any): Promise<AxiosResponse> {
    return axios.get(`${API_URL}/user/`, User);
  }
  updateUser(id: string, User: any): Promise<AxiosResponse> {
    return axios.put(`${API_URL}/user/${id}`, User);
  }
  deleteUser(id: string): Promise<AxiosResponse> {
    return axios.delete(`${API_URL}/user/${id}`);
  }

}
export default new UserService();