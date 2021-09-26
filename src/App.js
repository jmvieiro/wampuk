import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Adultos from "./containers/adultos";
import Blog from "./containers/blog";
import Cursos from "./containers/cursos";
import FAQ from "./containers/faq";
import Infantil from "./containers/infantil";
import Landing from "./containers/landing";
import { LoginProvider } from "./context/LoginContext";
import MiCuenta from "./containers/micuenta";
import Micofre from "./containers/micofre";
import NotFound from "./containers/not-found";
import React from "react";
import Suscripciones from "./containers/suscripciones";
import DetalleArticulo from "./containers/detalleArticulo";

function App() {
  return (
    <LoginProvider>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/infantil" component={Infantil} />
            <Route exact path="/adultos" component={Adultos} />
            <Route exact path="/cursos" component={Cursos} />
            <Route exact path="/suscripciones" component={Suscripciones} />
            <Route exact path="/faq" component={FAQ} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/micuenta" component={MiCuenta} />
            <Route exact path="/micofre" component={Micofre} />
            <Route exact path="/articulo/:id" component={DetalleArticulo} />
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    </LoginProvider>
  );
}

export default App;
