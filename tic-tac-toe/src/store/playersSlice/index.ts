import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface IPlayer {
  name: string;
}

export interface IPlayers {
  player1: IPlayer;
  player2: IPlayer;
}

const initialState: IPlayers = {
  player1: {
    name: "",
  },
  player2: {
    name: "",
  },
};

export const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    setPlayer1Name(state, action: PayloadAction<string>) {
      state.player1.name = action.payload;
    },
    setPlayer2Name(state, action: PayloadAction<string>) {
      state.player2.name = action.payload;
    },
    restorePlayers(state) {
      state.player1 = initialState.player1;
      state.player2 = initialState.player2;
    },
  },
});

export const player1Selector = (state: RootState) => state.players.player1;
export const player2Selector = (state: RootState) => state.players.player2;

// Action creators are generated for each case reducer function
export const { setPlayer1Name, setPlayer2Name, restorePlayers } =
  playersSlice.actions;

export default playersSlice.reducer;
