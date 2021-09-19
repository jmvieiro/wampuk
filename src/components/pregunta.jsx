import React from "react";

const Pregunta = ({ title, text }) => {
  return (
    <div className="mb-4">
      <p className="fw-bold">{title}</p>
      <p>{text}</p>
    </div>
  );
};

export default Pregunta;
