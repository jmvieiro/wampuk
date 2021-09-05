// import "../scss/header.scss";

import { Link } from "react-router-dom";
import React from "react";
import logo_wampuk_blanco from "../images/logo_wampuk_blanco.png";
import logo_wampuk_sf from "../images/logo_wampuk_sf.png";

const Header = ({ adult = false }) => {
  return (
    <nav
      className={`navbar navbar-expand-lg text-uppercase fixed-top ${
        adult ? "background-adults" : "background-children"
      }`}
      id="mainNav"
    >
      <div className="container">
        <Link to={"/"} className="navbar-brand">
          <img
            src={adult ? logo_wampuk_blanco : logo_wampuk_sf}
            title="Wampuk"
            alt="Wampuk"
            className="logo"
          />
        </Link>
        <button
          className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            {adult ? (
              <>
                <li className="nav-item mx-0 mx-lg-1">
                  <a
                    className="nav-link py-2 px-0 px-lg-2 rounded"
                    href="#portfolio"
                  >
                    Cursos
                  </a>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <a
                    className="nav-link py-2 px-0 px-lg-2 rounded"
                    href="#about"
                  >
                    Suscripciones
                  </a>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <a
                    className="nav-link py-2 px-0 px-lg-2 rounded"
                    href="#contact"
                  >
                    Preguntas frecuentes
                  </a>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <Link
                    to={"/children"}
                    className="nav-link py-2 px-0 px-lg-2 rounded"
                  >
                    Sección Infantil
                  </Link>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <a
                    className="nav-link py-2 px-0 px-lg-2 rounded"
                    href="#contact"
                  >
                    Ingresar
                  </a>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <a
                    className="nav-link py-2 px-0 px-lg-2 rounded"
                    href="#contact"
                  >
                    Registrarse
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item mx-0 mx-lg-1">
                  <a
                    className="nav-link py-2 px-0 px-lg-2 rounded"
                    href="#contact"
                  >
                    Explorar
                  </a>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <Link
                    to={"/adults"}
                    className="nav-link py-2 px-0 px-lg-2 rounded"
                  >
                    Sección Adultos
                  </Link>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <a
                    className="nav-link py-2 px-0 px-lg-2 rounded"
                    href="#contact"
                  >
                    Ingresar
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
