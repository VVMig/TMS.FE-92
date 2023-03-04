import { Form, Formik } from "formik";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import * as Yup from "yup";

import { TextField } from "../../../../components";
import { Routes } from "../../../../constants/Routes";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { createUser, userSelector } from "../../../../store/userSlice";
import { StyledFormFooter, StyledFormFooterAction } from "../styles";
import { StyledSubmitButton } from "./styles";

interface IProps {
  onChangeFormState: () => void;
}

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

type FormValues = typeof initialValues;

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(5).required("Required"),
  confirmPassword: Yup.string().min(5).required("Required"),
});

const StyledForm = styled(Form)`
  > * + * {
    margin-top: 20px;
  }
`;

export const SignUpForm = ({ onChangeFormState }: IProps) => {
  const history = useHistory();
  const { loading } = useSelector(userSelector);

  const dispatch = useAppDispatch();

  const onSubmit = async (values: FormValues) => {
    await dispatch(
      createUser({
        email: values.email,
        password: values.password,
        username: values.name,
        callback: () =>
          history.push(`${Routes.CONFIRMATION_EMAIL}?email=${values.email}`),
      })
    );
  };

  return (
    <>
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(props) => (
            <StyledForm>
              <TextField label="Name" name="name" />
              <TextField label="Email" name="email" />
              <TextField label="Password" name="password" type="password" />
              <TextField
                label="Confirm password"
                name="confirmPassword"
                type="password"
              />
              <StyledSubmitButton
                disabled={!props.dirty}
                type="submit"
                loading={loading}
              >
                Sign Up
              </StyledSubmitButton>
              <StyledFormFooter>
                <span>Already have an account?</span>
                <StyledFormFooterAction onClick={onChangeFormState}>
                  {"  "}Sign In
                </StyledFormFooterAction>
              </StyledFormFooter>
            </StyledForm>
          )}
        </Formik>
      </div>
    </>
  );
};
