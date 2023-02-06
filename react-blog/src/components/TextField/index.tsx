import { useMemo } from "react";
import {
  StyledContainer,
  StyledError,
  StyledInput,
  StyledLabel,
  StyledTextarea,
} from "./styles";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  multiline?: boolean;
}

export const TextField = ({ label, error, multiline, ...props }: IProps) => {
  const id = useMemo(() => `a${Date.now()}`, []);

  return (
    <StyledContainer>
      {!!label && <StyledLabel htmlFor={id}>{label}</StyledLabel>}
      {multiline ? (
        <StyledTextarea id={id} withError={!!error} />
      ) : (
        <StyledInput id={id} withError={!!error} {...props} />
      )}
      {error && <StyledError>{error}</StyledError>}
    </StyledContainer>
  );
};
