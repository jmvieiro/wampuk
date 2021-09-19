import { Container, Image, Nav, NavLink, Navbar } from "react-bootstrap";
import React, { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";
import ModalLogin from "./modalLogin";
import ModalNewAccount from "./modalNewAccount";
import UserMenu from "./userMenu";
import logo_wampuk_blanco from "../images/logo_wampuk_blanco.png";
import logo_wampuk_sf from "../images/logo_wampuk_sf.png";

const Header = ({ adult = false }) => {
  const { autenticadoAdulto, autenticadoNino } = useContext(LoginContext);

  // modals login
  const [showLoginAdulto, setShowLoginAdulto] = useState(false);
  const [showLoginNino, setShowLoginNino] = useState(false);

  // crear usuarios:
  const [showCrearAdulto, setShowCrearAdulto] = useState(false);
  const [showCrearNino, setShowCrearNino] = useState(false);

  useEffect(() => {
    const a = document.getElementsByClassName("nav-link");
    for (let index = 0; index < a.length; index++) {
      const element = a[index];
      if (element.getAttribute("href") === window.location.pathname)
        element.style.color = adult ? "#9e005d" : "green";
      else element.style.color = adult ? "white" : "black";
      if (element.innerText.toLowerCase() === "registrarse")
        element.style.color = "#00FFFF";
    }
  });

  return (
    <Navbar
      fixed="top"
      expand="lg"
      className={` ${adult ? "background-adults" : "background-children"}`}
      style={{ padding: 1 }}
    >
      <Container>
        <Navbar.Brand className="p-0">
          <Link to={adult ? "/adultos" : "/infantil"}>
            <Image
              src={adult ? logo_wampuk_blanco : logo_wampuk_sf}
              title="Wampuk"
              alt="Wampuk"
              className="logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="NavMain rounded-3">
          {adult ? (
            <>
              <Nav className="ms-auto NavLeft">
                <Link
                  className="nav-link"
                  to={"/cursos"}
                >
                  Cursos
                </Link>
                <Link
                  className="nav-link"
                  to={"/suscripciones"}
                >
                  Suscripciones
                </Link>
                <Link
                  className="nav-link"
                  to={"/blog"}
                >
                  Blog
                </Link>
                <Link
                  className="nav-link"
                  to={"/faq"}
                >
                  Preguntas frecuentes
                </Link>
                <Link
                  className="nav-link"
                  to={"/infantil"}
                >
                  Ir a sección infantil
                </Link>
              </Nav>
              <Nav className="ms-auto NavRigth">
                {autenticadoAdulto || autenticadoNino ? (
                  <UserMenu adult={adult} />
                ) : (
                  <>
                    <NavLink
                      onClick={() => {
                        setShowLoginAdulto(true);
                      }}
                      style={{  textAlign: "right" }}
                    >
                      Iniciar sesión
                    </NavLink>
                    <NavLink
                      onClick={() => {
                        setShowCrearAdulto(true);
                      }}
                      style={{  textAlign: "right" }}
                    >
                      Registrarse
                    </NavLink>
                  </>
                )}
              </Nav>

              <ModalLogin
                adult={adult}
                showLoginAdulto={showLoginAdulto}
                setShowLoginAdulto={setShowLoginAdulto}
              />
              {/* Modal Crear cuenta adultos */}
              <ModalNewAccount
                adult={adult}
                showCrearAdulto={showCrearAdulto}
                setShowCrearAdulto={setShowCrearAdulto}
                setShowCrearNino={setShowCrearNino}
              />
              {/* Modal Crear cuenta ninos */}
              <ModalNewAccount
                adult={!adult}
                showCrearNino={showCrearNino}
                setShowCrearNino={setShowCrearNino}
              />
            </>
          ) : (
            <>
              <Nav className="ms-auto NavLeft">
                <Link
                  className="nav-link"
                  to={"/explorar"}
                >
                  Explorar
                </Link>
                <Link
                  className="nav-link"
                  to={"/adultos"}
                >
                  Ir a sección adultos
                </Link>
              </Nav>
              <Nav className="ms-auto NavRigth">
                {autenticadoAdulto || autenticadoNino ? (
                  <UserMenu adult={adult} />
                ) : (
                  <>
                    <NavLink
                      className="nav-link"
                      onClick={() => {
                        setShowLoginNino(true);
                      }}
                    >
                      Iniciar sesión
                    </NavLink>
                  </>
                )}
              </Nav>

              {/* Modal Login niños*/}
              <ModalLogin
                adult={adult}
                showLoginNino={showLoginNino}
                setShowLoginNino={setShowLoginNino}
              />
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
