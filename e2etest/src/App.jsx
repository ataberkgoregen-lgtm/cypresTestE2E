import { Switch, Route, useLocation } from "react-router-dom";

import Login from "./components/Login";
import Success from "./components/Success";

import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/success">
          <Success></Success>
        </Route>
      </Switch>
    </>
  );
}

export const LocationDisplay = () => {
  const location = useLocation();

  return <div data-testid="location-display">{location.pathname}</div>;
};

export default App;
