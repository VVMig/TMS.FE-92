import React from "react";
import { StyledButton } from "./styles";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  customType?: "primary" | "secondary";
  withWholeWidth?: boolean;
}

export const CommonButton: React.FC<IProps> = ({
  children,
  customType = "primary",
  withWholeWidth = false,
  ...props
}) => {
  return (
    <StyledButton
      customType={customType}
      withWholeWidth={withWholeWidth}
      {...props}
    >
      {children}
    </StyledButton>
  );
};
