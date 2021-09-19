import { Col, Container, Row } from "react-bootstrap";
import React, { useEffect } from "react";

import Articulo from "../components/articulo";
import ContactForm from "../components/contactForm";
import Footer from "../components/footer";
import Header from "../components/header";
import articulo from "../images/articulo.png";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const articulos = [
    {
      id: 1,
      title: "Título de artículo, máximo dos renglones",
      text: `09/09/21 - 10 min de lectura`,
      img: articulo,
    },
    {
      id: 2,
      title: "Título de artículo, máximo dos renglones",
      text: `09/09/21 - 10 min de lectura`,
      img: articulo,
    },
    {
      id: 3,
      title: "Título de artículo, máximo dos renglones",
      text: `09/09/21 - 10 min de lectura`,
      img: articulo,
    },
    {
      id: 4,
      title: "Título de artículo, máximo dos renglones",
      text: `09/09/21 - 10 min de lectura`,
      img: articulo,
    },
    {
      id: 5,
      title: "Título de artículo, máximo dos renglones",
      text: `09/09/21 - 10 min de lectura`,
      img: articulo,
    },
    {
      id: 6,
      title: "Título de artículo, máximo dos renglones",
      text: `09/09/21 - 10 min de lectura`,
      img: articulo,
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
              Blog
            </p>
          </Col>
        </Row>
      </Container>

      <Container fluid="sm" className={"mt-5 mb-5 p-0"}>
        <Row
          className="mb-4"
          style={{ justifyContent: "center", margin: "auto" }}
        >
          <h5>
            Accede a artículos sobre educación, infancia y otras temáticas
            relevantes.
          </h5>
        </Row>
        <Row style={{ margin: "auto", alignItems: "center" }}>
          {articulos.map((articulo, index) => {
            return (
              <Col key={index} className="p-0 p-sm-2 m-0 mb-sm-4" md={4}>
                <Articulo
                  id={articulo.id}
                  title={articulo.title}
                  text={articulo.text}
                  img={articulo.img}
                  index={index}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
      <ContactForm />
      <Footer />
    </>
  );
};

export default Blog;
