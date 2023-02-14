import { useCallback, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import { ErrorBoundary } from "./components/ErrorBoundries";
import { Routes } from "./constants/Routes";
import { Footer, Header } from "./layouts";
import { Home } from "./pages";
import { themeDark, themeLight } from "./theme";

const StyledBackground = styled.div`
  background-color: ${(props) => props.theme.bodyBackground};
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: background-color 0.2s linear;
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
          <Router>
            <Switch>
              <Route path={Routes.HOME}>
                <Home />
              </Route>
            </Switch>
          </Router>
          <Footer />
        </StyledBackground>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
