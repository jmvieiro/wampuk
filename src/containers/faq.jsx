import { Col, Container, Row } from "react-bootstrap";
import React, { useEffect } from "react";

import ContactForm from "../components/contactForm";
import Footer from "../components/footer";
import Header from "../components/header";
import Pregunta from "../components/pregunta";

const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const preguntas = [
    {
      id: 1,
      title: "¿Para quién está dirigido el contenido de Wampuk?",
      text: "El contenido de Wampuk está dirigido para niños de 8 a 12 años.",
    },
    {
      id: 2,
      title: "¿Para quién está dirigido el contenido de Wampuk?",
      text: "El contenido de Wampuk está dirigido para niños de 8 a 12 años.",
    },
    {
      id: 3,
      title: "¿En qué se diferencia Wampuk de otras plataformas online?",
      text: `El contenido de Wampuk se ha creado totalmente en español. El contenido pre-grabado está en español y tiene una calidad excelente calidad audivisual. Wampuk para un niño(a) representa un mundo en el cual va a encontrar independencia para avanzar en su curso.
      El contenido de Wampuk se enfoca en mejorar sus habilidades blandas, nuestros cursos van a influir en la vida diaria del niño(a) y contribuir a su desarrollo creativo y emocional.`,
    },
    {
      id: 4,
      title: "¿Cual es nuestra metodología comprometedora?",
      text: `En Wampuk nos enfocamos en incentivar la tasa de cursos terminados (La idea es brindar todos los recursos y metodologías para que el niño(a) termine el curso de manera independiente y no lo deje a medias. Utilizamos animación y gamificación para incentivar a terminar el curso y comprobar conocimientos.`,
    },
    {
      id: 5,
      title:
        "¿Como padre/madre es posible controlar el progreso de un niño(a)?",
      text: `Si. Un papá o mamá recibirán una notificación cuando su hijo haya terminado un curso. Además podrán ver su certificado.`,
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
              Preguntas frecuentes
            </p>
          </Col>
        </Row>
      </Container>

      <Container className={"mt-4 p-4 py-5 py-lg-4"}>
        <Row className="mb-4" style={{ justifyContent: "center", margin: "auto" }}>
          <h5>
            Si tu pregunta no se encuentra en esta sección, puedes contactarnos
            y te responderemos a la brevedad.
          </h5>
        </Row>
        <Row style={{ justifyContent: "center", margin: "auto" }}>
          {preguntas.map((pregunta, index) => {
            return (
              <Pregunta
                key={index}
                id={pregunta.id}
                title={pregunta.title}
                text={pregunta.text}
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

export default FAQ;
