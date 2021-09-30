import { Col, Container, Row } from "react-bootstrap";
import React, { useContext, useEffect } from "react";

import ContactForm from "../components/contactForm";
import Curso from "../components/curso";
import Footer from "../components/footer";
import Header from "../components/header";
import { WampukContext } from "../context/WampukContext";

const Cursos = ({adult}) => {
  const { cursos } = useContext(WampukContext);

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
              Cursos disponibles
            </p>
          </Col>
        </Row>
      </Container>

      <Container className={" p-4 py-5 py-lg-4"}>
        <Row style={{ justifyContent: "center", margin: "auto" }}>
          {cursos.map((curso, index) => {
            return (
              <Curso
                key={index}
                id={curso.id}
                title={curso.title}
                text={curso.descripcionCorta}
                img={curso.img}
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

export default Cursos;
