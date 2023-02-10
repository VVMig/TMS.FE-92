import React from "react";
import { StyledButton } from "./styles";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  customType?: "primary" | "secondary";
}

export const CommonButton: React.FC<IProps> = ({
  children,
  customType = "primary",
  ...props
}) => {
  return (
    <StyledButton customType={customType} {...props}>
      {children}
    </StyledButton>
  );
};
