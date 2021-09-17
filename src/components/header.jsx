import { Container, Image, Nav, NavLink, Navbar } from "react-bootstrap";
import React, { useContext, useState } from "react";

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

  return (
    <Navbar
      fixed="top"
      expand="lg"
      className={` ${adult ? "background-adults" : "background-children"}`}
      style={{ padding: 1 }}
    >
      <Container>
        <Navbar.Brand className="p-0">
          <Link to={"/"}>
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
                  style={{ color: "white" }}
                >
                  Cursos
                </Link>
                <Link
                  className="nav-link"
                  to={"/suscripciones"}
                  style={{ color: "white" }}
                >
                  Suscripciones
                </Link>
                <Link
                  className="nav-link"
                  to={"/blog"}
                  style={{ color: "white" }}
                >
                  Blog
                </Link>
                <Link
                  className="nav-link"
                  to={"/faq"}
                  style={{ color: "white" }}
                >
                  Preguntas frecuentes
                </Link>
                <Link
                  className="nav-link"
                  to={"/adultos#contact"}
                  style={{ color: "white" }}
                >
                  Contacto
                </Link>
                <Link
                  className="nav-link"
                  to={"/infantil"}
                  style={{ color: "white" }}
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
                      style={{ color: "white", textAlign: "right" }}
                    >
                      Iniciar sesión
                    </NavLink>
                    <NavLink
                      onClick={() => {
                        setShowCrearAdulto(true);
                      }}
                      style={{ color: "white", textAlign: "right" }}
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
                  style={{ color: "black" }}
                >
                  Explorar
                </Link>
                <Link
                  className="nav-link"
                  to={"/adultos"}
                  style={{ color: "black" }}
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
                      style={{ color: "black" }}
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
