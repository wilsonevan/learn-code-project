import React from "react";
import { Switch, Route } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";

function App() {
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NoMatch} />
      </Switch>
    </>
  );
}

export default App;
