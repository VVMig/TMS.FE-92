import { useHistory } from "react-router-dom";
import { CommonButton } from "../../../../components";
import { Routes } from "../../../../constants/Routes";
import { useQuery } from "../../../../hooks/useQuery";
import { StyledSignUpEndText } from "./styles";

export const SignUpEnd = () => {
  const email = useQuery("email");

  const history = useHistory();

  const onClickBackHome = () => {
    history.push(Routes.HOME);
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
        Go to home
      </CommonButton>
    </>
  );
};
