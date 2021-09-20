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
      id: 1,
      title: "Mindfulness",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet ut iaculis nunc sit.",
      img: curso,
    },
    {
      id: 2,
      title: "Desayunos divertidos",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet ut iaculis nunc sit.",
      img: curso,
    },
    {
      id: 3,
      title: "Movimiento corporal (Danza árabe)",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet ut iaculis nunc sit.",
      img: curso,
    },
    {
      id: 4,
      title: "Reciclaje",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet ut iaculis nunc sit.",
      img: curso,
    },
    {
      id: 5,
      title: "Acuarela",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet ut iaculis nunc sit.",
      img: curso,
    },
    {
      id: 6,
      title: "Moda reciclable",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet ut iaculis nunc sit.",
      img: curso,
    },
    {
      id: 7,
      title: "Tenencia responsable de perritos",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet ut iaculis nunc sit.",
      img: curso,
    },
    {
      id: 8,
      title: "Yoga",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet ut iaculis nunc sit.",
      img: curso,
    },
    {
      id: 9,
      title: "Baile Urbano",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet ut iaculis nunc sit.",
      img: curso,
    },
    {
      id: 10,
      title: "Belleza y cuidado personal",
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
        <Row style={{ textAlign: "center" }}>
          <h5>Conocé nuestra oferta de cursos</h5>
        </Row>
        <Row style={{ justifyContent: "center", margin: "auto" }}>
          {cursos.map((curso, index) => {
            return (
              <Curso
                key={index}
                id={curso.id}
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
