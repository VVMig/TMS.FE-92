import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 60%;
  margin: 0 auto;
`;

export const StyledBackToHomeLink = styled(Link)`
  color: ${(props) => props.theme.gray200};
  text-decoration: none;
`;
