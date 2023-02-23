import { CircularProgress } from "@mui/material";
import { useLoading } from "../../hooks/useLoading";
import { Feed } from "./Feed";
import { StyledContainer } from "./styles";

interface IProps {
  time?: Date;
}

export const Home = ({ time }: IProps) => {
  const { isLoading } = useLoading(false);

  return (
    <StyledContainer>
      {/* {isLoading ? <CircularProgress /> : <Auth />} */}
      <Feed />
    </StyledContainer>
  );
};
