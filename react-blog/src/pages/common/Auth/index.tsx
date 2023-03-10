import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { Routes } from "../../../constants/Routes";
import { userSelector } from "../../../store/userSlice";
import { ActivateError } from "./ActivateError";
import { ActivateSuccess } from "./ActivateSuccess";
import { AuthHeader } from "./AuthHeader";
import { SignInForm } from "./SignInForm";
import { SignUpEnd } from "./SignUpEnd";
import { SignUpForm } from "./SignUpForm";
import { StyledContainer, StyledFormAuthContainer } from "./styles";

const authHeaderTitle = {
  signup: "Sign Up",
  signin: "Sign In",
  signupend: "Registration Confirmation",
  activatesuccess: "Success",
  activateerror: "Error",
};

type FormStateType =
  | "signup"
  | "signin"
  | "signupend"
  | "activatesuccess"
  | "activateerror";

interface IProps {
  formState: FormStateType;
}

export const Auth = ({ formState }: IProps) => {
  const user = useSelector(userSelector);
  const history = useHistory();

  const onChangeFormState = (newFormState: FormStateType) => () => {
    switch (newFormState) {
      case "signup":
        history.push(Routes.REGISTER);
        break;
      case "signin":
        history.push(Routes.LOGIN);
        break;
      case "signupend":
        history.push(Routes.CONFIRMATION_EMAIL);
        break;
      default:
        break;
    }
  };

  const renderFormState = () => {
    switch (formState) {
      case "signin":
        return <SignInForm onChangeFormState={onChangeFormState("signup")} />;
      case "signup":
        return <SignUpForm onChangeFormState={onChangeFormState("signin")} />;
      case "signupend":
        return <SignUpEnd />;
      case "activatesuccess":
        return <ActivateSuccess />;
      case "activateerror":
        return <ActivateError />;
      default:
        break;
    }
  };

  if (
    user.isAuth &&
    (history.location.pathname === Routes.LOGIN ||
      history.location.pathname === Routes.REGISTER)
  ) {
    return <Redirect to={Routes.HOME} />;
  }

  return (
    <StyledContainer>
      <AuthHeader title={authHeaderTitle[formState]} />
      <StyledFormAuthContainer>{renderFormState()}</StyledFormAuthContainer>
    </StyledContainer>
  );
};
