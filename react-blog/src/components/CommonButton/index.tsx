import { CircularProgress } from "@mui/material";
import React from "react";
import { StyledButton } from "./styles";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  customType?: "primary" | "secondary";
  withWholeWidth?: boolean;
  loading?: boolean;
}

export const CommonButton: React.FC<IProps> = ({
  children,
  customType = "primary",
  withWholeWidth = false,
  loading,
  ...props
}) => {
  return (
    <StyledButton
      customType={customType}
      withWholeWidth={withWholeWidth}
      {...props}
    >
      {loading ? <CircularProgress size={15} /> : children}
    </StyledButton>
  );
};
