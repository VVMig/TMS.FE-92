import styled from "styled-components";

interface IStyledButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  customType: "primary" | "secondary";
  withWholeWidth: boolean;
}

const getColorForButton = (
  type: "primary" | "secondary",
  disabled: boolean | undefined
) => {
  const styles = {
    primary: disabled ? "gray" : "white",
    secondary: disabled ? "gray" : "black",
  };

  return styles[type];
};

const getBackgroundColorForButton = (
  type: "primary" | "secondary",
  disabled: boolean | undefined
) => {
  const styles = {
    primary: disabled ? "#E8E8E8" : "#2436A7",
    secondary: disabled ? "#E8E8E8" : "#E8E8E8",
  };

  return styles[type];
};

const getHoverBackgroundColorForButton = (
  type: "primary" | "secondary",
  disabled: boolean | undefined
) => {
  const styles = {
    primary: "#5463CA",
    secondary: "#DADADA",
  };

  return disabled ? undefined : styles[type];
};

export const StyledButton = styled.button<IStyledButton>`
  color: ${(props) => getColorForButton(props.customType, props.disabled)};
  padding: 12px 6px;
  font-weight: 600;
  background-color: ${(props) =>
    getBackgroundColorForButton(props.customType, props.disabled)};
  border: none;
  border-radius: 2px;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  :hover {
    background-color: ${(props) =>
      getHoverBackgroundColorForButton(props.customType, props.disabled)};
  }
  width: ${(props) => (props.withWholeWidth ? "100%" : "auto")};
`;
