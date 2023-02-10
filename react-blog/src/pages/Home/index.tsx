import { CircularProgress } from "@mui/material";
import { withLoading } from "../../hoc/withLoading";
import { CreatePostForm } from "./CreatePostForm";
import { StyledContainer } from "./styles";

interface IProps {
  time: Date;
}

export const Home = withLoading<IProps>(({ isLoading }) => {
  return (
    <StyledContainer>
      {isLoading ? <CircularProgress /> : <CreatePostForm />}
    </StyledContainer>
  );
}, false);
