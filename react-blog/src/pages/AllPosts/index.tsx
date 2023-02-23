import { Link } from "react-router-dom";
import { Routes } from "../../constants/Routes";
import { StyledContainer, StyledPost } from "./styles";

export const AllPosts = () => {
  return (
    <StyledContainer>
      <Link to={Routes.POST.replace(":id", `${Date.now()}`)}>
        <StyledPost />
      </Link>
    </StyledContainer>
  );
};
