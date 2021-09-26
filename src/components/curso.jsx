import { Card } from "react-bootstrap";
import React from "react";

const Curso = ({ title, text, img }) => {
  return (
    <Card className="m-1" style={{ width: "25rem", border: 0 }}>
      <Card.Img src={img} style={{width: '100%' }} />
      <Card.Body
        style={{
          position: "absolute",
          backgroundColor: "#000000",
          opacity: 0.7,
          color: "white",
          bottom: 0,
          width: "100%",
          maxWidth: 376,
        }}
      >
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Curso;
