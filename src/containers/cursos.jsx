import { Col, Container, Row } from "react-bootstrap";
import React, { useEffect } from "react";

import ContactForm from "../components/contactForm";
import Curso from "../components/curso";
import Footer from "../components/footer";
import Header from "../components/header";
import curso from "../images/curso.png";

const Cursos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cursos = [
    {
      title: "Curso 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet ut iaculis nunc sit.",
      img: curso,
    },
    {
      title: "Curso 2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet ut iaculis nunc sit.",
      img: curso,
    },
    {
      title: "Curso 3",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet ut iaculis nunc sit.",
      img: curso,
    },
    {
      title: "Curso 4",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet ut iaculis nunc sit.",
      img: curso,
    },
    {
      title: "Curso 5",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet ut iaculis nunc sit.",
      img: curso,
    },
    {
      title: "Curso 6",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet ut iaculis nunc sit.",
      img: curso,
    },
    {
      title: "Curso 7",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet ut iaculis nunc sit.",
      img: curso,
    },
    {
      title: "Curso 8",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet ut iaculis nunc sit.",
      img: curso,
    },
    {
      title: "Curso 9",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet ut iaculis nunc sit.",
      img: curso,
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
              Cursos disponibles
            </p>
          </Col>
        </Row>
      </Container>

      <Container className={" p-4 py-5 py-lg-4"}>
        <Row style={{ textAlign: "center" }}>
          <h5>Conocé nuestra oferta de cursos</h5>
        </Row>
        <Row style={{ justifyContent: "center", margin: "auto" }}>
          {cursos.map((curso, index) => {
            return (
              <Curso
                key={index}
                title={curso.title}
                text={curso.text}
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
