import styled from "styled-components";

interface IProps {
  withError?: boolean;
}

export const StyledInput = styled.input<IProps>`
  padding: 8px;
  border-radius: 1px;
  background-color: #ffffff;
  border: none;
  ${(props) => (props.withError ? `outline: 2px solid #f22307;` : undefined)}
  :disabled {
    background-color: #cfcecc;
  }
  :focus {
    ${(props) => (!props.withError ? `outline: 2px solid #cfcecc;` : undefined)}
  }
`;

export const StyledTextarea = styled.textarea<IProps>`
  padding: 8px;
  border-radius: 1px;
  background-color: #ffffff;
  border: none;
  ${(props) => (props.withError ? `outline: 2px solid #f22307;` : undefined)}
  :disabled {
    background-color: #cfcecc;
  }
  :focus {
    ${(props) => (!props.withError ? `outline: 2px solid #cfcecc;` : undefined)}
  }
`;

export const StyledLabel = styled.label`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 6px;
  color: black;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledError = styled.div`
  color: #f22307;
  font-size: 14px;
  margin-top: 8px;
`;
