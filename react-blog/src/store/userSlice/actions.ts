import { createAsyncThunk } from "@reduxjs/toolkit";
import { IRegisterUserBody, registerUser } from "../../services";

interface ICreateUserArgs extends IRegisterUserBody {
  callback: () => void;
}

export const createUser = createAsyncThunk(
  "users/createUser",
  async (body: ICreateUserArgs) => {
    const response = await registerUser(body);

    body.callback();

    return response.data;
  }
);
