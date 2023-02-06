import styled from "styled-components";

interface IStyledButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  customType: "primary" | "secondary";
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

export const StyledButton = styled.button<IStyledButton>`
  color: ${(props) => getColorForButton(props.customType, props.disabled)};
  padding: 12px 6px;
  font-weight: 600;
  background-color: ${(props) => (props.disabled ? "#d2d2d4" : "#3030dc")};
  border: none;
  border-radius: 2px;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  :hover {
    opacity: ${(props) => (props.disabled ? 1 : 0.8)};
  }
`;
