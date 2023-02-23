import { Routes } from "../../../constants/Routes";
import React from "react";
import {
  StyledMenu,
  StyledNavLink,
  StyledNavMenu,
  StyledNavMenuItem,
} from "./styles";

interface INavLink {
  to: Routes;
  exact: boolean;
  activeClassName: string;
  label: string;
}

const activeClassName = "active";

const navLinks: INavLink[] = [
  {
    to: Routes.HOME,
    exact: true,
    activeClassName,
    label: "Home",
  },
  {
    to: Routes.ALL_POSTS,
    exact: true,
    activeClassName,
    label: "All Posts",
  },
];

export const SideMenu = React.forwardRef<{}>((props, ref) => {
  console.log(ref);

  return (
    <StyledMenu ref={ref as any}>
      <StyledNavMenu>
        {navLinks.map(({ to, exact, activeClassName, label }) => (
          <StyledNavMenuItem>
            <StyledNavLink
              to={to}
              activeClassName={activeClassName}
              exact={exact}
            >
              {label}
            </StyledNavLink>
          </StyledNavMenuItem>
        ))}
      </StyledNavMenu>
    </StyledMenu>
  );
});
