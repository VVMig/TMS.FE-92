import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { Player } from "../../constants/Players";

interface IField {
  user?: "player1" | "player2";
  symbol?: "" | "x" | "o";
}

interface IFieldElement extends IField {
  row: number;
  column: number;
}

export interface IGame {
  field: IField[][];
  winnerPlayer?: Player;
}

const initialState: IGame = {
  field: [
    [{}, {}, {}],
    [{}, {}, {}],
    [{}, {}, {}],
  ],
  winnerPlayer: undefined,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setFieldElement(state, action: PayloadAction<IFieldElement>) {
      state.field = state.field.map((row, rowIndex) =>
        rowIndex + 1 === action.payload.row
          ? row.map((column, columnIndex) =>
              columnIndex + 1 === action.payload.column
                ? {
                    user: action.payload.user,
                    symbol: action.payload.symbol,
                  }
                : column
            )
          : row
      );
    },
    restoreField(state) {
      state.field = initialState.field;
    },
    checkWinner(state) {
      // Row check
      let winnerPlayer: undefined | Player;

      state.field.forEach((row, rowIndex) => {
        let crossSymbol = 0;
        let zeroSymbol = 0;

        row.forEach((column, columnIndex) => {
          if (column.symbol === "x") crossSymbol++;
          if (column.symbol === "o") zeroSymbol++;
        });

        if (crossSymbol === 3) {
          winnerPlayer = "player1";
        } else if (zeroSymbol === 3) {
          winnerPlayer = "player2";
        }
      });

      if (winnerPlayer) {
        state.winnerPlayer = winnerPlayer;

        return;
      }

      // Column check
      for (let columnIndex = 0; columnIndex < 3; columnIndex++) {
        let crossSymbol = 0;
        let zeroSymbol = 0;

        for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
          if (state.field[rowIndex][columnIndex].symbol === "x") crossSymbol++;
          if (state.field[rowIndex][columnIndex].symbol === "o") zeroSymbol++;
        }

        if (crossSymbol === 3) {
          winnerPlayer = "player1";

          break;
        } else if (zeroSymbol === 3) {
          winnerPlayer = "player2";

          break;
        }
      }

      if (winnerPlayer) {
        state.winnerPlayer = winnerPlayer;

        return;
      }

      let crossSymbol = 0;
      let zeroSymbol = 0;

      for (let columnIndex = 0; columnIndex < 3; columnIndex++) {
        if (state.field[columnIndex][columnIndex].symbol === "x") crossSymbol++;
        if (state.field[columnIndex][columnIndex].symbol === "o") zeroSymbol++;

        if (crossSymbol === 3) {
          winnerPlayer = "player1";

          break;
        } else if (zeroSymbol === 3) {
          winnerPlayer = "player2";

          break;
        }
      }

      if (winnerPlayer) {
        state.winnerPlayer = winnerPlayer;

        return;
      }

      zeroSymbol = 0;
      crossSymbol = 0;

      for (let columnIndex = 0; columnIndex < 3; columnIndex++) {
        if (state.field[columnIndex][2 - columnIndex].symbol === "x")
          crossSymbol++;
        if (state.field[columnIndex][2 - columnIndex].symbol === "o")
          zeroSymbol++;

        if (crossSymbol === 3) {
          winnerPlayer = "player1";

          break;
        } else if (zeroSymbol === 3) {
          winnerPlayer = "player2";

          break;
        }
      }

      if (winnerPlayer) {
        state.winnerPlayer = winnerPlayer;

        return;
      }
    },
  },
});

export const fieldSelector = (state: RootState) => state.game.field;
export const winnerPlayerSelector = (state: RootState) =>
  state.game.winnerPlayer;
// Action creators are generated for each case reducer function
export const { setFieldElement, checkWinner, restoreField } = gameSlice.actions;

export default gameSlice.reducer;
