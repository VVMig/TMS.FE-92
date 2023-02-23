import { useCallback, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  RouteProps,
  Switch,
} from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import { ErrorBoundary } from "./components/ErrorBoundries";
import { Routes } from "./constants/Routes";
import { Footer, Header } from "./layouts";
import { AllPosts, Home, Post } from "./pages";
import { Auth } from "./pages/common";
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

interface IRoute {
  path: Routes;
  routeProps?: RouteProps;
  component: React.ReactNode;
}

const routes: IRoute[] = [
  {
    path: Routes.HOME,
    routeProps: {
      exact: true,
    },
    component: <Home />,
  },
  {
    path: Routes.LOGIN,
    routeProps: {
      exact: true,
    },
    component: <Auth formState="signin" />,
  },
  {
    path: Routes.REGISTER,
    routeProps: {
      exact: true,
    },
    component: <Auth formState="signup" />,
  },
  {
    path: Routes.CONFIRMATION_EMAIL,
    routeProps: {
      exact: true,
    },
    component: <Auth formState="signupend" />,
  },
  {
    path: Routes.ALL_POSTS,
    component: <AllPosts />,
    routeProps: {
      exact: true,
    },
  },
  {
    path: Routes.POST,
    component: <Post />,
  },
];

const App = () => {
  const [isLightTheme, setIsLightTheme] = useState(true);

  const onToggleTheme = useCallback(() => {
    setIsLightTheme((prev) => !prev);
  }, []);

  return (
    <ErrorBoundary>
      <ThemeProvider theme={isLightTheme ? themeLight : themeDark}>
        <StyledBackground>
          <Router>
            <Header onToggleTheme={onToggleTheme} />
            <Switch>
              {routes.map((route, routeIndex) => (
                <Route
                  path={route.path}
                  {...route.routeProps}
                  key={`${route.path}-${routeIndex}`}
                >
                  {route.component}
                </Route>
              ))}
            </Switch>
            <Footer />
          </Router>
        </StyledBackground>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
