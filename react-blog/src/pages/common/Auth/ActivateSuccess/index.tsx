import { useHistory } from "react-router-dom";
import { CommonButton } from "../../../../components";
import { Routes } from "../../../../constants/Routes";
import { StyledSignUpEndText } from "../SignUpEnd/styles";

export const ActivateSuccess = () => {
  const history = useHistory();

  const onClickBackHome = () => {
    history.push(Routes.HOME);
  };

  return (
    <>
      <StyledSignUpEndText>
        <p>Email confirmed</p>
        <p>Your registration is now complited</p>
      </StyledSignUpEndText>
      <CommonButton withWholeWidth onClick={onClickBackHome}>
        Go to home
      </CommonButton>
    </>
  );
};
