import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Routes } from "../../constants";
import { Player } from "../../constants/Players";
import { removeSpaces } from "../../helpers";
import {
  player1Selector,
  player2Selector,
  setPlayer1Name,
  setPlayer2Name,
} from "../../store";

export const Authorization = () => {
  const [authState, setAuthState] = useState<Player>("player1");

  const history = useHistory();

  const dispatch = useDispatch();

  const player1 = useSelector(player1Selector);
  const player2 = useSelector(player2Selector);

  const onChangeUser: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (authState === "player1") {
      dispatch(setPlayer1Name(e.target.value));
    } else {
      dispatch(setPlayer2Name(e.target.value));
    }
  };

  const onClickNext = () => {
    if (removeSpaces(player1.name).length) {
      setAuthState("player2");
    }
  };

  const onClickPlay = () => {
    if (removeSpaces(player2.name).length) {
      history.push(Routes.GAME);
    }
  };

  return (
    <div>
      <h1>
        Enter name for
        {authState === "player1" ? " Player 1" : " Player 2"}
      </h1>
      <input
        onChange={onChangeUser}
        value={authState === "player1" ? player1.name : player2.name}
      />
      {authState === "player2" ? (
        <button onClick={onClickPlay}>Play</button>
      ) : (
        <button onClick={onClickNext}>Next</button>
      )}
    </div>
  );
};
