import { Menu } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";
import { SideMenu } from "./SideMenu";
import { StyledHeader } from "./styles";
import { CSSTransition } from "react-transition-group";
import { useOutsideClick } from "../../hooks/useOutsideClick";

interface IProps {
  onToggleTheme: () => void;
}

export const Header = ({ onToggleTheme }: IProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sideMenuRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useOutsideClick(headerRef, () => {
    setIsMenuOpen(false);
  });

  const toggleMenuOpen = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <StyledHeader ref={headerRef}>
      <CSSTransition
        nodeRef={sideMenuRef}
        in={isMenuOpen}
        timeout={100}
        classNames="side-menu"
        unmountOnExit
      >
        <SideMenu ref={sideMenuRef} />
      </CSSTransition>
      <div>
        <Menu
          onClick={toggleMenuOpen}
          sx={{
            cursor: "pointer",
          }}
        />
      </div>
      <div></div>
      <div></div>
    </StyledHeader>
  );
};
