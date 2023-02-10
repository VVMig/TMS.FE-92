import { useField } from "formik";
import { useMemo } from "react";
import {
  StyledContainer,
  StyledError,
  StyledInput,
  StyledLabel,
  StyledTextarea,
} from "./styles";

interface IProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  error?: string;
  multiline?: boolean;
}

export const TextField = ({ label, error, multiline, ...props }: IProps) => {
  const [field, meta] = useField(props as unknown as any);

  const id = useMemo(() => `a${Date.now()}`, []);

  const isError = !!meta.error && !!meta.touched;

  return (
    <StyledContainer>
      {!!label && <StyledLabel htmlFor={id}>{label}</StyledLabel>}
      {multiline ? (
        <StyledTextarea id={id} withError={isError} {...field} {...props} />
      ) : (
        <StyledInput id={id} withError={isError} {...field} {...props} />
      )}
      {meta.error && meta.touched && <StyledError>{meta.error}</StyledError>}
    </StyledContainer>
  );
};
