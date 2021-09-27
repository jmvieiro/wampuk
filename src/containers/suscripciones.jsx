import { Col, Container, Row } from "react-bootstrap";
import React, { useContext, useEffect } from "react";

import ContactForm from "../components/contactForm";
import Footer from "../components/footer";
import Header from "../components/header";
import Suscripcion from "../components/suscripcion";
import { WampukContext } from "../context/WampukContext";

const Suscripciones = () => {
  const { suscripciones } = useContext(WampukContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header adult={true} />
      <Container
        fluid
        style={{ marginTop: 77 }}
        className={"background-adults text-center p-3 py-2 py-lg-3"}
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
                id={suscripcion.id}
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
