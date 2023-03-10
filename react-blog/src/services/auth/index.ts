import { api } from "..";
import { IUserState } from "../../store/userSlice";

export interface IRegisterUserBody {
  username: string;
  email: string;
  password: string;
}

export const registerUser = (body: IRegisterUserBody) => {
  return api.post("auth/users/", body);
};

export interface IActivateEmailBody {
  uid: string;
  token: string;
}

export const activateEmail = (body: IActivateEmailBody) => {
  return api.post("auth/users/activation/", body);
};

type LoginBody = Omit<IRegisterUserBody, "username">;

export const createJWT = (body: LoginBody) => {
  return api.post<{ access: string; refresh: string }>(
    "auth/jwt/create/",
    body
  );
};

export const refreshJWT = (refreshToken: string) => {
  return api.post<{ access: string }>("auth/jwt/refresh/", {
    refresh: refreshToken,
  });
};

type CurrentUserResponse = Pick<IUserState, "email" | "id"> & {
  username: string;
};

export const getCurrentUser = () => {
  return api.get<CurrentUserResponse>("auth/users/me/");
};
