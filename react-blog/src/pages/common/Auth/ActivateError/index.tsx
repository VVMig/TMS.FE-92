import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { CommonButton } from "../../../../components";
import { Routes } from "../../../../constants/Routes";
import { StyledSignUpEndText } from "../SignUpEnd/styles";

export const ActivateError = () => {
  const history = useHistory();

  const onClickBackHome = () => {
    history.push(Routes.HOME);
  };

  return (
    <>
      <StyledSignUpEndText>
        <p>Email not confirmed</p>
        <p>Something went wrong</p>
      </StyledSignUpEndText>
      <CommonButton withWholeWidth onClick={onClickBackHome}>
        Go to home
      </CommonButton>
    </>
  );
};
