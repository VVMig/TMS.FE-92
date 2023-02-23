import { StyledBackToHomeLink, StyledContainer } from "./styles";

interface IProps {
  title: string;
}

export const AuthHeader = ({ title }: IProps) => {
  return (
    <StyledContainer>
      <StyledBackToHomeLink to="/">Back to home</StyledBackToHomeLink>
      <h2>{title}</h2>
    </StyledContainer>
  );
};
