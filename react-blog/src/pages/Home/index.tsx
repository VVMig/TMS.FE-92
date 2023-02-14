import { CircularProgress } from "@mui/material";
import { useLoading } from "../../hooks/useLoading";
import { Auth } from "./Auth";
import { StyledContainer } from "./styles";

interface IProps {
  time?: Date;
}

export const Home = ({ time }: IProps) => {
  const { isLoading } = useLoading(false);

  return (
    <StyledContainer>
      {isLoading ? <CircularProgress /> : <Auth />}
    </StyledContainer>
  );
};
