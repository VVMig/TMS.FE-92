import { StyledAvatar, StyledName, StyledPersona } from "./styles";

interface IProps {
  name: string;
}

export const Persona = ({ name }: IProps) => {
  return (
    <StyledPersona>
      <StyledAvatar></StyledAvatar>
      <StyledName>{name}</StyledName>
    </StyledPersona>
  );
};
