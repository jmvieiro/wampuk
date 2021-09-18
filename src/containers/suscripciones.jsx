import { Col, Container, Row } from "react-bootstrap";
import React, { useEffect } from "react";

import ContactForm from "../components/contactForm";
import Footer from "../components/footer";
import Header from "../components/header";
import Suscripcion from "../components/suscripcion";

const Suscripciones = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const suscripciones = [
    {
      title: "Suscripción básica",
      p1: "Costo: 39.99USD por curso.",
      p2: "Permite acceder a cursos individuales.",
      p3: ["Clases pregrabadas", "Acceso desde mobile o desktop."],
    },
    {
      title: "Suscripción media",
      p1: "Costo: 14.99USD por mes.",
      p2: "Permite acceder a toda la plataforma de Wampuk por un mes entero.",
      p3: [
        "Clases pregrabadas",
        "Acceso desde mobile o desktop.",
        "Participación en actividades de gamificación: Acceso al top 10 de Wampuk.",
        "Certificación de terminación de actividades.",
        "Reconocimiento a los mejores proyectos.",
      ],
    },
    {
      title: "Suscripción oro",
      p1: "Costo: 7.99USD por mes facturado al año.",
      p2: "Suscripción por un año a la plataforma Wampuk. Haz que tu hijo aprenda cada semana todo el año.",
      p3: [
        "Clases pregrabadas",
        "Acceso desde mobile o desktop.",
        "Participación en actividades de gamificación: Acceso al top 10 de Wampuk.",
        "Certificación de terminación de actividades.",
        "Reconocimiento a los mejores proyectos.",
        "Descuentos para más usuarios.",
      ],
    },
  ];

  return (
    <>
      <Header adult={true} />
      <Container
        fluid
        style={{ marginTop: 77 }}
        className={"background-adults text-center p-4 py-5 py-lg-4"}
      >
        <Row>
          <Col>
            <p
              className="fw-bold mb-0 text-uppercase text-white"
              style={{ fontSize: 32 }}
            >
              Suscripciones
            </p>
          </Col>
        </Row>
      </Container>

      <Container className={" p-4 py-5 py-lg-4"}>
        <Row style={{ textAlign: "center" }}>
          <h5>Elige tu modelo de suscripción</h5>
        </Row>
        <Row style={{ justifyContent: "center", margin: "auto" }}>
          {suscripciones.map((suscripcion, index) => {
            return (
              <Suscripcion
                key={index}
                title={suscripcion.title}
                p1={suscripcion.p1}
                p2={suscripcion.p2}
                p3={suscripcion.p3}
                index={index}
              />
            );
          })}
        </Row>
      </Container>
      <ContactForm />

      <Footer />
    </>
  );
};

export default Suscripciones;
