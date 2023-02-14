import { useHistory } from "react-router-dom";
import { CommonButton } from "../../../../components";
import { Routes } from "../../../../constants/Routes";
import { StyledSignUpEndText } from "./styles";

export const SignUpEnd = ({ email }) => {
  const history = useHistory();

  const onClickBackHome = () => {
    history.push(`${Routes.HOME}?form=end`);
  };

  return (
    <>
      <StyledSignUpEndText>
        <p>Please activate your account</p>
        <p>
          link in the email <b>{email}</b>
        </p>
        <p> Please check your email</p>
      </StyledSignUpEndText>
      <CommonButton withWholeWidth onClick={onClickBackHome}>
        Sign Up
      </CommonButton>
    </>
  );
};
