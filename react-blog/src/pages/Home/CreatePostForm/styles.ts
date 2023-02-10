import { Form } from "formik";
import styled from "styled-components";
import { CommonButton } from "../../../components";

export const StyledForm = styled(Form)`
  padding: 12px;
  background-color: #e3e3e3;
  width: 500px;
  > * + * {
    margin-top: 20px;
  }
`;

export const StyledSubmitButton = styled(CommonButton)`
  width: 100%;
`;
