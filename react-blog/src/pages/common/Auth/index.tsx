import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Routes } from "../../../constants/Routes";
import { AuthHeader } from "./AuthHeader";
import { SignInForm } from "./SignInForm";
import { SignUpEnd } from "./SignUpEnd";
import { SignUpForm } from "./SignUpForm";
import { StyledContainer, StyledFormAuthContainer } from "./styles";

const authHeaderTitle = {
  signup: "Sign Up",
  signin: "Sign In",
  signupend: "Registration Confirmation",
};

type FormStateType = "signup" | "signin" | "signupend";

interface IProps {
  formState: FormStateType;
}

export const Auth = ({ formState }: IProps) => {
  const [registredEmail, setRegistredEmail] = useState("");
  const history = useHistory();

  const onChangeFormState = (newFormState: FormStateType) => () => {
    // setFormState(newFormState);
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

  const onRegistrationEnd = (email: string) => {
    setRegistredEmail(email);

    history.push(Routes.CONFIRMATION_EMAIL);
  };

  const renderFormState = () => {
    switch (formState) {
      case "signin":
        return <SignInForm onChangeFormState={onChangeFormState("signup")} />;
      case "signup":
        return (
          <SignUpForm
            onChangeFormState={onChangeFormState("signin")}
            onRegistrationEnd={onRegistrationEnd}
          />
        );
      case "signupend":
        return <SignUpEnd email={registredEmail} />;
      default:
        break;
    }
  };

  return (
    <StyledContainer>
      <AuthHeader title={authHeaderTitle[formState]} />
      <StyledFormAuthContainer>{renderFormState()}</StyledFormAuthContainer>
    </StyledContainer>
  );
};
