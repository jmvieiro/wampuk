import { Button, Col, Row } from "react-bootstrap";

import React from "react";

const Suscripcion = ({ title, p1, p2, p3, index }) => {
  let clase =
    index === 0
      ? "bg-grey-claro"
      : index === 1
      ? "bg-cyan-claro"
      : "background-adults";
  let color =
    index === 0 ? "text-black" : index === 1 ? "text-black" : "text-white";
  return (
    <Col className={`text-center ${color} p-5  m-2 rounded-3 ${clase}`}>
      <Row className="">
        <Col>
          <h4>{title}</h4>
        </Col>
      </Row>
      <Row
        className="mt-4"
        style={{ textAlign: "left", minHeight: 400, marginBottom: 10 }}
      >
        <Col>
          <p>{p1}</p>
          <p>{p2}</p>
          <ul>
            {p3.map((p, index) => {
              return <li key={index}>{p}</li>;
            })}
          </ul>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button className="btn-morado">SUSCRIBIRSE</Button>
        </Col>
      </Row>
    </Col>
  );
};

export default Suscripcion;
