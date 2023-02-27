import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Routes } from "../../constants";
import { Player } from "../../constants/Players";
import { removeSpaces } from "../../helpers";
import { player1Selector, player2Selector, restorePlayers } from "../../store";
import {
  checkWinner,
  fieldSelector,
  restoreField,
  setFieldElement,
  winnerPlayerSelector,
} from "../../store/gameSlice";
import styles from "./Game.module.css";

export const Game = () => {
  const [turn, setTurn] = useState<Player>("player1");

  const player1 = useSelector(player1Selector);
  const player2 = useSelector(player2Selector);

  const field = useSelector(fieldSelector);
  const winnerPlayer = useSelector(winnerPlayerSelector);

  const dispatch = useDispatch();

  const onNextPlayer = () => {
    setTurn(turn === "player1" ? "player2" : "player1");
  };

  const onClickColumn = (rowIndex: number, colIndex: number) => () => {
    if (field[rowIndex][colIndex].symbol) {
      return;
    }

    dispatch(
      setFieldElement({
        row: rowIndex + 1,
        column: colIndex + 1,
        user: turn,
        symbol: turn === "player1" ? "x" : "o",
      })
    );

    setTimeout(() => {
      dispatch(checkWinner());
    });

    onNextPlayer();
  };

  useEffect(() => {
    if (winnerPlayer) {
      window.alert(
        `The winner is ${
          winnerPlayer === "player1" ? player1.name : player2.name
        }`
      );

      dispatch(restoreField());
      dispatch(restorePlayers());
    }
  }, [winnerPlayer]);

  if (!removeSpaces(player1.name) || !removeSpaces(player2.name)) {
    return <Redirect to={Routes.AUTHORIZATION} />;
  }

  return (
    <div>
      <h2>{turn === "player1" ? player1.name : player2.name} turn</h2>
      {field.map((row, rowIndex) => (
        <div className={styles.row}>
          {row.map((col, colIndex) => (
            <div
              className={styles.column}
              onClick={onClickColumn(rowIndex, colIndex)}
            >
              {col.symbol}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
