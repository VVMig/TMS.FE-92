import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createUser } from "./actions";

export interface IUserState {
  id: number | null;
  name: string;
  email: string;
  isAuth: boolean;
  loading: boolean;
  error: null | string;
}

const initialState: IUserState = {
  id: null,
  name: "",
  isAuth: false,
  loading: false,
  error: null,
  email: "",
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
  extraReducers: (builder) => {
    builder.addCase(
      createUser.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.id = action.payload.id;
        state.email = action.payload.email;
        state.name = action.payload.username;
        state.isAuth = true;
      }
    );
    builder.addCase(createUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      createUser.rejected,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        console.log(action);
        state.error = "Error";
      }
    );
  },
});

// Action creators are generated for each case reducer function
export const { initUser, resetUser } = userSlice.actions;

export default userSlice.reducer;

export * from "./actions";
export * from "./selectors";
