import Login from "./components/Login";
import Success from "./components/Success";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login}>
          <Login />
        </Route>
        <Route exact path="/success" component={Success}>
          <Success />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
