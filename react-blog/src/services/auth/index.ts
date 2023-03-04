import axios from "axios";

export interface IRegisterUserBody {
  username: string;
  email: string;
  password: string;
}

export const registerUser = (body: IRegisterUserBody) => {
  return axios.post("https://studapi.teachmeskills.by/auth/users/", body);
};
