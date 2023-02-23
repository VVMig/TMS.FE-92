import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { keyframes } from "styled-components";

const appearFromLeft = keyframes`
 0% { transform: translate(-100%) }
 100% { transform: translate(0) }
`;

export const StyledMenu = styled.menu`
  position: fixed;
  left: 0;
  bottom: 0;
  height: calc(100% - 46px);
  width: 200px;
  background-color: white;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-left: 0;
  &.side-menu-exit-active {
    animation: ${appearFromLeft} 0.1s linear reverse forwards;
  }
  &.side-menu-enter-active {
    animation: ${appearFromLeft} 0.1s linear;
  }
`;

export const StyledNavMenu = styled.nav`
  display: flex;
  flex-direction: column;
`;

export const StyledNavMenuItem = styled.div`
  width: 100%;
  padding: 12px 0;
  display: flex;
  justify-content: center;
  text-align: center;
  border-bottom: ${(props) => `1px solid ${props.theme.border}`};
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => `${props.theme.mainText}`};
  &.active {
    color: ${(props) => `${props.theme.blue}`};
  }
`;
