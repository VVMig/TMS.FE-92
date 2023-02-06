import { useMemo } from "react";
import {
  StyledContainer,
  StyledError,
  StyledInput,
  StyledLabel,
} from "./styles";

interface IProps {
  label?: string;
  error?: string;
}

export const CommonInput = ({ label, error }: IProps) => {
  const id = useMemo(() => `a${Date.now()}`, []);

  return (
    <StyledContainer>
      {!!label && <StyledLabel htmlFor={id}>{label}</StyledLabel>}
      <StyledInput id={id} withError={!!error} />
      {error && <StyledError>{error}</StyledError>}
    </StyledContainer>
  );
};
