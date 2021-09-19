import { Col, Container, Image, Row } from "react-bootstrap";

import { Link } from "react-router-dom";
import React from "react";

const Educador = ({ title, text, img, id }) => {
  return (
    <Container>
      <Row className="p-2">
        <Col>
          <Image style={{ margin: "auto" }} src={img} />
        </Col>
      </Row>
      <Row className="p-1 p-lg-4 py-2">
        <Col className="p-3 bg-morado rounded-3 text-white">
          <Link to={"/educadores/" + id}>
            <h5>{title}</h5>
          </Link>
          <h6>{text}</h6>
        </Col>
      </Row>
    </Container>
  );
};

export default Educador;
