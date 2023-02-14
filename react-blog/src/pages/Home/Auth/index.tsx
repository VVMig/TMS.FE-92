import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Routes } from "../../../constants/Routes";
import { AuthHeader } from "./AuthHeader";
import { SignInForm } from "./SignInForm";
import { SignUpEnd } from "./SignUpEnd";
import { SignUpForm } from "./SignUpForm";
import { StyledFormAuthContainer } from "./styles";

const authHeaderTitle = {
  signup: "Sign Up",
  signin: "Sign In",
  signupend: "Registration Confirmation",
};

type FormStateType = "signup" | "signin" | "signupend";

export const Auth = () => {
  const [formState, setFormState] = useState<FormStateType>("signup");
  const [registredEmail, setRegistredEmail] = useState("");
  const location = useLocation();
  const history = useHistory();

  const onChangeFormState = (newFormState: FormStateType) => () => {
    setFormState(newFormState);
  };

  const onRegistrationEnd = (email: string) => {
    setRegistredEmail(email);
    setFormState("signupend");
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

  useEffect(() => {
    if (location.search) {
      setFormState("signup");
      history.push(Routes.HOME);
    }
  }, [location.search]);

  return (
    <>
      <AuthHeader title={authHeaderTitle[formState]} />
      <StyledFormAuthContainer>{renderFormState()}</StyledFormAuthContainer>
    </>
  );
};
