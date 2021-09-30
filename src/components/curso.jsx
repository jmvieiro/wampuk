import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";

const Curso = ({ id, title, text, img, link = true }) => {
  return (
    <div className="p-2" style={{ maxWidth: 352, border: 0 }}>
      <Card>
        <Link style={{ textTransform: "none" }} to={link ? `/curso/${id}` : "/realizarCurso"}>
          <Card.Img src={img} />
          <Card.Body
            style={{
              position: "absolute",
              backgroundColor: "#000000",
              opacity: 0.5,
              color: "white",
              bottom: 0,
              width: "100%",
            }}
          >
            <Card.Title
              dangerouslySetInnerHTML={{ __html: title }}
            ></Card.Title>
            <Card.Text dangerouslySetInnerHTML={{ __html: text }}></Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </div>
  );
};

export default Curso;
