import { Form, Formik } from "formik";
import styled from "styled-components";
import * as Yup from "yup";

import { CommonButton, TextField } from "../../../../components";
import { StyledFormFooter, StyledFormFooterAction } from "../styles";

interface IProps {
  onChangeFormState: () => void;
}

interface IFormValues {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(5).required("Required"),
});

const StyledForm = styled(Form)`
  > * + * {
    margin-top: 20px;
  }
`;

export const SignInForm = ({ onChangeFormState }: IProps) => {
  const onSubmit = (values: IFormValues) => {};

  return (
    <>
      <div>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(props) => (
            <StyledForm>
              <TextField label="Email" name="email" />
              <TextField label="Password" name="password" />
              <CommonButton
                withWholeWidth
                disabled={!props.dirty}
                type="submit"
              >
                Sign In
              </CommonButton>
              <StyledFormFooter>
                <span>Don't have an account?</span>
                <StyledFormFooterAction onClick={onChangeFormState}>
                  {"  "}Sign Up
                </StyledFormFooterAction>
              </StyledFormFooter>
            </StyledForm>
          )}
        </Formik>
      </div>
    </>
  );
};
