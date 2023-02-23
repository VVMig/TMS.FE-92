import { Menu } from "@mui/icons-material";
import { useRef, useState } from "react";
import { SideMenu } from "./SideMenu";
import { StyledHeader } from "./styles";
import { CSSTransition } from "react-transition-group";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { Persona } from "./Persona";
import { useSelector } from "react-redux";
import { userSelector } from "../../store/userSlice/selectors";

export const Header = () => {
  const user = useSelector(userSelector);
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
        <SideMenu ref={sideMenuRef} closeMenu={toggleMenuOpen} />
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
      <div>{user.isAuth && <Persona name={user.name} />}</div>
    </StyledHeader>
  );
};
