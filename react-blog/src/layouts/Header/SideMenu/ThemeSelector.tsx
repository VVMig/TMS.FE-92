import React from "react";
import { StyledThemeSelector } from "./styles";

interface IProps {
  children: React.ReactNode;
  isActive?: boolean;
  onClick: () => void;
}

export const ThemeSelector = ({
  children,
  isActive = false,
  onClick,
}: IProps) => {
  return (
    <StyledThemeSelector isActive={isActive} onClick={onClick}>
      {children}
    </StyledThemeSelector>
  );
};
