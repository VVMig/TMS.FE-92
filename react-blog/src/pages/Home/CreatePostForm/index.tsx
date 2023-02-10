import { Form, Formik } from "formik";
import styled from "styled-components";
import * as Yup from "yup";

import { TextField } from "../../../components";
import { StyledSubmitButton } from "./styles";

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
  password: Yup.string().min(5).required(),
  confirmPassword: Yup.string().min(5).required(),
});

const StyledForm = styled(Form)`
  padding: 12px;
  background-color: #e3e3e3;
  width: 500px;
  > * + * {
    margin-top: 20px;
  }
`;

export const CreatePostForm = () => {
  const onSubmit = (values: IFormValues) => {};

  return (
    <div>
      <h1>Create post form</h1>
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
        <StyledForm>
          <TextField label="Name" name="name" />
          <TextField label="Email" name="email" />
          <TextField label="Password" name="password" />
          <TextField label="Confirm password" name="confirmPassword" />
          <StyledSubmitButton type="submit">Create post</StyledSubmitButton>
        </StyledForm>
      </Formik>
    </div>
  );
};
