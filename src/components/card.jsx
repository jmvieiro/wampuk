import { Col, Container, Row } from "react-bootstrap";

import React from "react";

const Card = ({ title, text, img }) => {
  return (
    <Container className="m-1 mb-4">
      <Row className="bg-white p-4 rounded-3 shadow">
        <Col lg={4} className="p-2">
          <img
            src={img}
            title="Wampuk"
            alt="Wampuk"
            style={{ width: "100%", maxWidth: 120 }}
            className=""
          />
        </Col>
        <Col lg={8} className="pt-2">
          <h1>{title}</h1>
          <p>{text}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Card;
