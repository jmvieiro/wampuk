import { Card, Col, Container, Row } from "react-bootstrap";

import Footer from "../components/footer";
import Header from "../components/header";
import React from "react";
import articulo from "../images/articulo.png";
import { useState } from "react";

function DetalleArticulo(props) {
  const [idArticulo, setIDArticulo] = useState(props.pais);
  const [articulo, setArticulo] = useState({});

  const obtenerArticulo = () => {
    // consultar el articulo por su id
  };

  return (
    <>
      <Header adult={true} />
      <Container className="m-1 mb-4">
        <Row className="bg-white p-4 rounded-3 shadow">
          <Col lg={4} className="p-2">
            <img
              src={articulo}
              title="titulo"
              alt="titulo"
              style={{ width: "100%", maxWidth: 120 }}
              className=""
            />
          </Col>
          <Col lg={8} className="pt-2">
            <h1>Titulo</h1>
            <p>Descripcion</p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default DetalleArticulo;
