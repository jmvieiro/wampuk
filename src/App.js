import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Adultos from "./containers/adultos";
import Cursos from "./containers/cursos";
import Infantil from "./containers/infantil";
import Landing from "./containers/landing";
import { LoginProvider } from "./context/LoginContext";
import NotFound from "./containers/not-found";
import React from "react";
import Suscripciones from "./containers/suscripciones";

function App() {
  return (
    <LoginProvider>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/infantil/" component={Infantil} />
            <Route exact path="/adultos/" component={Adultos} />
            <Route exact path="/cursos/" component={Cursos} />
            <Route exact path="/suscripciones/" component={Suscripciones} />
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    </LoginProvider>
  );
}

export default App;
