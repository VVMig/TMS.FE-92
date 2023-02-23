import "styled-components";

interface IPalette {
  main: string;
  contrastText: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    mainText: string;
    bodyBackground: string;
    blue: string;
    border: string;
    gray200: string;
    blue500: string;
  }
}
