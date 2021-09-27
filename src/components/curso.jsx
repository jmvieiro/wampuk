import { Card } from "react-bootstrap";
import React from "react";

const Curso = ({ title, text, img }) => {

  return (
    <div className="p-2" style={{ maxWidth: 352, border: 0 }}>
      <Card>
        <Card.Img src={img} />
        <Card.Body
          style={{
            position: "absolute",
            backgroundColor: "#000000",
            opacity: 0.7,
            color: "white",
            bottom: 0,
            width: "100%",
          }}
        >
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Curso;
