import { ArrowCircleUp } from "@mui/icons-material";
import styled from "styled-components";
import { useScroll } from "../../hooks/useScroll";
import { CommonButton } from "../CommonButton";

const StyledUpButton = styled(CommonButton)`
  position: fixed;
  bottom: 5%;
  left: 5%;
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;

export const UpButton = ({ observableRef }) => {
  const { scrollY, scrollToTop } = useScroll(observableRef);

  if (scrollY < 400) {
    return null;
  }

  return (
    <StyledUpButton onClick={scrollToTop}>
      <ArrowCircleUp />
    </StyledUpButton>
  );
};
