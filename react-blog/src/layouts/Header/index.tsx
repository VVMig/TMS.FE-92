import { ThemeToggler } from "../../components/ThemeToggler";
import { StyledHeader } from "./styles";

interface IProps {
  onToggleTheme: () => void;
}

export const Header = ({ onToggleTheme }: IProps) => {
  return (
    <StyledHeader>
      <ThemeToggler label="Dark" onChange={onToggleTheme} />
    </StyledHeader>
  );
};
