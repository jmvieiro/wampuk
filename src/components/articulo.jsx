import { Col, Container, Image, Row } from "react-bootstrap";

import { Link } from "react-router-dom";
import React from "react";

const Articulo = ({ title, text, img, index, id }) => {
  let bgColor = index % 2 === 0 ? "bg-cyan-claro" : "bg-gray1";
  let color = index % 2 === 0 ? "text-black" : "text-white";
  return (
    <Link to={`/articulo/${id}`}>
      <Container
        fluid="sm"
        className={`${bgColor} ${color} shadow-sm p-3 rounded-1`}
      >
        <Row>
          <Col xs={6} lg={7}>
            <p className="fw-bold">{title}</p>
            <p>{text}</p>
          </Col>
          <Col
            xs={6}
            lg={5}
            className="text-center"
            style={{ alignSelf: "center" }}
          >
            <Image src={img} style={{ maxWidth: "100%" }} />
          </Col>
        </Row>
      </Container>
    </Link>
  );
};

export default Articulo;
