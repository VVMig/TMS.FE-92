import { useCallback, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import { ErrorBoundary } from "./components/ErrorBoundries";
import { Footer, Header } from "./layouts";
import { Home } from "./pages";
import { themeDark, themeLight } from "./theme";

const StyledBackground = styled.div`
  background-color: ${(props) => props.theme.bodyBackground};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const App = () => {
  const [isLightTheme, setIsLightTheme] = useState(true);

  const onToggleTheme = useCallback(() => {
    setIsLightTheme((prev) => !prev);
  }, []);

  return (
    <ErrorBoundary>
      <ThemeProvider theme={isLightTheme ? themeLight : themeDark}>
        <StyledBackground>
          <Header onToggleTheme={onToggleTheme} />
          <Home />
          <Footer />
        </StyledBackground>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
