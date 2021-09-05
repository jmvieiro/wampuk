import React, { useEffect } from "react";

import Footer from "../components/footer";
import Header from "../components/header";
import { Link } from "react-router-dom";
import LogoDivider from "../components/logoDivider";

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header adult={true} />{" "}
      <header className="masthead text-center pb-5">
        <h1>Página no encontrada.</h1>
        <LogoDivider />
        <Link to={"/"}>
          <button
            style={{ width: 200, fontSize: 18 }}
            className="text-uppercase text-center font-weight-bold bg-primary text-white rounded p-2"
          >
            Volver al inicio
          </button>
        </Link>
      </header>
      <Footer adult={true} />
    </>
  );
};

export default NotFound;
