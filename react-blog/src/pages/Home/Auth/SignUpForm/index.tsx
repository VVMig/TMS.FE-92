import { Form, Formik } from "formik";
import styled from "styled-components";
import * as Yup from "yup";

import { TextField } from "../../../../components";
import { StyledFormFooter, StyledFormFooterAction } from "../styles";
import { StyledSubmitButton } from "./styles";

interface IProps {
  onChangeFormState: () => void;
  onRegistrationEnd: (email: string) => void;
}

interface IFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

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

export const SignUpForm = ({
  onChangeFormState,
  onRegistrationEnd,
}: IProps) => {
  const onSubmit = (values: IFormValues) => {
    onRegistrationEnd(values.email);
  };

  return (
    <>
      <div>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(props) => (
            <StyledForm>
              <TextField label="Name" name="name" />
              <TextField label="Email" name="email" />
              <TextField label="Password" name="password" />
              <TextField label="Confirm password" name="confirmPassword" />
              <StyledSubmitButton disabled={!props.dirty} type="submit">
                Create post
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
