import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Routes } from "./constants";
import { Authorization, Game } from "./pages";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path={Routes.AUTHORIZATION}>
          <Authorization />
        </Route>
        <Route path={Routes.GAME}>
          <Game />
        </Route>
        <Redirect to={Routes.AUTHORIZATION} />
      </Switch>
    </Router>
  );
};

export default App;
