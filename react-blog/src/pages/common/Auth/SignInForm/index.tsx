import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import * as Yup from "yup";

import { CommonButton, TextField } from "../../../../components";
import { LOCAL_STORAGE_KEYS } from "../../../../constants/LocalStorageKeys";
import { useLoading } from "../../../../hooks/useLoading";
import { api, createJWT, getCurrentUser } from "../../../../services";
import { initUser } from "../../../../store/userSlice";
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
  const { isLoading, onChangeLoadingState } = useLoading();

  const dispatch = useDispatch();

  const onSubmit = async (values: IFormValues) => {
    try {
      onChangeLoadingState(true);

      const { data } = await createJWT(values);

      localStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, data.access);
      localStorage.setItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN, data.refresh);

      api.defaults.headers.common = {
        Authorization: "Bearer " + data.access,
      };

      const { data: currentUser } = await getCurrentUser();

      dispatch(initUser(currentUser));
    } finally {
      onChangeLoadingState(false);
    }
  };

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
              <TextField label="Password" name="password" type="password" />
              <CommonButton
                withWholeWidth
                disabled={!props.dirty}
                type="submit"
                loading={isLoading}
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
