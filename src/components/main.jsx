import { Col, Container, Row } from "react-bootstrap";
import React, { useContext, useState } from "react";

import Card from "./card";
import Carousel from "./carousel";
import ContactForm from "./contactForm";
import { Link } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";
import ModalLogin from "./modalLogin";
import ModalNewAccount from "./modalNewAccount";
import Section from "./section";
import compass from "../images/compass.png";
import cursos from "../images/cursos.png";
import logo_wampuk_blanco from "../images/logo_wampuk_blanco.png";
import logo_wampuk_sf from "../images/logo_wampuk_sf.png";
import paper from "../images/paper.png";
import tesoro from "../images/tesoro.png";

const Main = ({ adult = false }) => {
  const { autenticadoNino, autenticadoAdulto } = useContext(LoginContext);

  const [showLoginNino, setShowLoginNino] = useState(false);
  const [showCrearNino, setShowCrearNino] = useState(false);

  return (
    <>
      {adult ? (
        <>
          <Container
            fluid
            style={{ marginTop: 77 }}
            className={"bg-violeta-claro text-center p-4 py-5 py-lg-4"}
          >
            <Container>
              <Row>
                <Col lg={12}>
                  <div
                    className="bg-gray1 text-white mt-5"
                    style={{
                      padding: 22,
                      margin: "auto",
                      maxWidth: 750,
                      width: "90%",
                    }}
                  >
                    <p className="fw-bold mb-0" style={{ fontSize: 40 }}>
                      ¡Bienvenido a Wampuk!
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </Container>
          <Container fluid className={"bg-wampuk text-white p-4 py-5 py-lg-4"}>
            <Container>
              <Row>
                <Col style={{ alignSelf: "center" }} lg={7}>
                  <Section
                    title={`¿Qué es Wampuk?`}
                    text={`Wampuk es una plataforma online en español dirigida para niños de 8 a 12 años que quieren aprender por su propia decisión conocimientos accionables que les sirvan en su vida diaria (habilidades blandas). Wampuk utiliza como herramientas principales la gamificación y el contenido audiovisual de calidad accesibles de una manera que provean una metodología de enseñanza comprometedora.`}
                    titleCenter={true}
                  />
                </Col>
                <Col lg={5} className="text-center">
                  <img
                    src={logo_wampuk_blanco}
                    title="Wampuk"
                    alt="Wampuk"
                    style={{ width: "80%", maxWidth: 275 }}
                    className="p-2 p-lg-4"
                  />
                </Col>
              </Row>
            </Container>
          </Container>
          <Container
            fluid
            className={"bg-cyan-claro text-black p-4 py-5 py-lg-4"}
          >
            <Container fluid>
              <Row>
                <Col style={{ alignSelf: "center" }} lg={5}>
                  <img
                    src={cursos}
                    title="Nuestros cursos"
                    alt="Nuestros cursos"
                    style={{ width: "100%" }}
                    className="p-4 p-lg-0"
                  />
                </Col>
                <Col lg={7} style={{ flex: 1, alignSelf: "center" }}>
                  <Link
                    to="/cursos"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Section
                      title={`Nuestros cursos`}
                      text={`Nuestros cursos se enfocan en desarrollar las habilidades blandas de los niños(as), ten la certeza que tu hijo(a) aprenderá contenido que le servirá para mejorar su vida diaria y contribuir a su desarrollo creativo y emocional. Además nuestros cursos, contienen una mezcla de contenido pregrabado, gamificación y comprobación del aprendizaje. Todos nuestros cursos están pensados con nuestra metodología comprometedora, nuestra idea es aumentar la tasa de cursos terminados.`}
                      action={"Ver cursos"}
                      titleCenter={true}
                    />
                  </Link>
                </Col>
              </Row>
            </Container>
          </Container>
          <Container fluid className={"text-black p-4 py-5 py-lg-4"}>
            <Container>
              <Row>
                <Col style={{ alignSelf: "center" }} lg={12}>
                  <Section title={`Nuestros educadores`} />
                  <Carousel />
                </Col>
              </Row>
            </Container>
          </Container>
          <Container
            fluid
            className={"bg-morado-claro text-black p-4 py-5 py-lg-4"}
          >
            <Container>
              <Row>
                <Col style={{ alignSelf: "center" }} lg={12}>
                  <Link
                    to="/suscripciones"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Section
                      title={`Elige tu modelo de suscripción`}
                      text={`Nuestros cursos se enfocan en desarrollar las habilidades blandas de los niños(as), ten la certeza que tu hijo(a) aprenderá contenido que le servirá para mejorar su vida diaria y contribuir a su desarrollo creativo y emocional. Además nuestros cursos, contienen una mezcla de contenido pregrabado, gamificación y comprobación del aprendizaje. Todos nuestros cursos están pensados con nuestra metodología comprometedora, nuestra idea es aumentar la tasa de cursos terminados.`}
                      action={"Ver suscripciones"}
                      titleCenter={true}
                    />
                  </Link>
                </Col>
              </Row>
            </Container>
          </Container>
          <ContactForm />
        </>
      ) : (
        <>
          <Container
            fluid
            style={{ marginTop: 77 }}
            className={"bg-violeta-claro text-center p-4 py-5 py-lg-4"}
          >
            <Container>
              <Row>
                <Col lg={12}>
                  <img
                    src={logo_wampuk_sf}
                    title="Wampuk"
                    alt="Wampuk"
                    style={{ width: 250 }}
                    className=""
                  />
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <div
                    className="bg-gray1 text-white mt-5"
                    style={{
                      padding: 22,
                      margin: "auto",
                      maxWidth: 750,
                      width: "90%",
                    }}
                  >
                    <p className="fw-bold mb-0" style={{ fontSize: 40 }}>
                      ¡Bienvenido a Wampuk!
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </Container>
          <Container
            fluid
            style={{
              backgroundColor: "#C4E9E5",
              paddingTop: 75,
              paddingBottom: 75,
            }}
            className={"text-center "}
          >
            <Container>
              <Row>
                {autenticadoNino ? (
                  <Col lg={6}>
                    <Link
                      style={{
                        textTransform: "none",
                        fontSize: "inherit",
                        color: "inherit",
                        fontWeight: "inherit",
                      }}
                      to="/micofre"
                    >
                      <Card
                        title={`MI COFRE`}
                        text={`Continúa con los cursos que empezaste o redescubre los que ya has terminado.`}
                        img={tesoro}
                      />
                    </Link>
                  </Col>
                ) : autenticadoAdulto ? (
                  <Col
                    lg={6}
                    onClick={() => {
                      setShowCrearNino(true);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <Card
                      title={`REGISTRAR NIÑX`}
                      text={`Puedes registrar a tu hijo o hija para que empiece a tener su experiencia Wampuk.`}
                      img={paper}
                    />
                  </Col>
                ) : (
                  <Col
                    lg={6}
                    onClick={() => {
                      setShowLoginNino(true);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <Card
                      title={`INICIA SESIÓN`}
                      text={`Inicia sesión para acceder a tus cursos y navegar por Wampuk.`}
                      img={paper}
                    />
                  </Col>
                )}
                <Col lg={6} onClick={() => {}} style={{ cursor: "pointer" }}>
                  <Link
                    style={{
                      textTransform: "none",
                      fontSize: "inherit",
                      color: "inherit",
                      fontWeight: "inherit",
                    }}
                    to="/explorar"
                  >
                    <Card
                      title={`EXPLORAR`}
                      text={`Descrubre diferentes cursos y diviértete aprendiendo.`}
                      img={compass}
                    />
                  </Link>
                </Col>
              </Row>
            </Container>
          </Container>
          {/* Modal Login niños*/}
          <ModalLogin
            adult={adult}
            showLoginNino={showLoginNino}
            setShowLoginNino={setShowLoginNino}
          />
          {/* Modal Crear cuenta ninos */}
          <ModalNewAccount
            adult={adult}
            showCrearNino={showCrearNino}
            setShowCrearNino={setShowCrearNino}
          />
        </>
      )}
    </>
  );
};

export default Main;
