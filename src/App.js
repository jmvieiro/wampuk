import "./App.scss";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Adults from "./containers/adults";
import Children from "./containers/children";
import Landing from "./containers/landing";
import NotFound from "./containers/not-found";
import React from "react";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/children/" component={Children} />
          <Route exact path="/adults/" component={Adults} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
