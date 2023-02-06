import React from "react";
import { StyledButton } from "./styles";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  customType?: "primary" | "secondary";
}

export const CommonButton = ({
  children,
  customType = "primary",
  ...props
}: IProps) => {
  return (
    <StyledButton customType={customType} {...props}>
      {children}
    </StyledButton>
  );
};
