import "./App.css";
import { Button } from "./components";

const App = () => {
  return (
    <>
      <Button>First button</Button>
      <Button customType="secondary">Disabled button</Button>
    </>
  );
};

export default App;
