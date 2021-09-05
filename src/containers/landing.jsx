import "../scss/landing.scss";

import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import logo_wampuk_blanco from "../images/logo_wampuk_blanco.png";
import seccion_adultos from "../images/seccion_adultos.png";
import seccion_infantil from "../images/seccion_infantil.png";

const Landing = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <div className="landingBackground">
        <div style={{ textAlign: "center", paddingBottom: 40, paddingTop: 40 }}>
          <img
            src={logo_wampuk_blanco}
            title="Sección Adultos"
            alt="Sección Adultos"
            className="landingImg"
          />
          <p>Lorem ipsum dolor sit amet</p>
        </div>
        <div className="left-half">
          <article className="landingArticule">
            <Link to={"/children"} style={{ flex: 0.5, margin: 0, padding: 0 }}>
              <img
                src={seccion_infantil}
                title="Sección Infantil"
                alt="Sección Infantil"
                className="landingImg imgShadow"
              />
            </Link>
          </article>
        </div>
        <div className="right-half">
          <article className="landingArticule">
            <Link to={"/adults"} style={{ flex: 0.5, margin: 0, padding: 0 }}>
              <img
                src={seccion_adultos}
                title="Sección Adultos"
                alt="Sección Adultos"
                className="landingImg imgShadow"
              />
            </Link>
          </article>
        </div>
      </div>
    </>
  );
};

export default Landing;
