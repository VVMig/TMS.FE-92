import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: end;
  background-color: ${(props) => props.theme.blue};
  padding: 8px 20px;
`;
