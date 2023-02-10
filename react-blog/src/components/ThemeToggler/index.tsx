import { FormControlLabel, Switch } from "@mui/material";

interface IProps {
  label: string;
  onChange: () => void;
}

export const ThemeToggler = ({ onChange, ...props }: IProps) => {
  return (
    <FormControlLabel
      onChange={onChange}
      {...props}
      control={<Switch color="secondary" />}
    />
  );
};
