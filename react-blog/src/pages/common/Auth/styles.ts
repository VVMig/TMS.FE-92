import styled from "styled-components";

export const StyledFormAuthContainer = styled.div`
  padding: 24px 12px;
  border: 1px solid ${(props) => props.theme.border};
  width: 500px;
  overflow: hidden;
`;

export const StyledFormFooter = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  color: ${(props) => props.theme.gray200};
`;

export const StyledFormFooterAction = styled.span`
  color: ${(props) => props.theme.blue500};
  white-space: pre;
  cursor: pointer;
`;

export const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding-top: 38px;
`;
