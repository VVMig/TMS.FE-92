import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IUserState {
  id: number | null;
  name: string;
  isAuth: boolean;
}

const initialState: IUserState = {
  id: null,
  name: "",
  isAuth: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    initUser(state, action: PayloadAction<IUserState>) {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.isAuth = action.payload.isAuth;
    },
    resetUser(state) {
      state.isAuth = initialState.isAuth;
      state.name = initialState.name;
      state.id = initialState.id;
    },
  },
});

// Action creators are generated for each case reducer function
export const { initUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
