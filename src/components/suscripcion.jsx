import { Button, Col, Row } from "react-bootstrap";
import React, { useContext } from "react";

import { LoginContext } from "../context/LoginContext";
import Swal from "sweetalert2";

const Suscripcion = ({ title, p1, p2, p3, index }) => {
  const { datosAdulto, autenticadoAdulto, guardarSuscripcion } =
    useContext(LoginContext);

  const suscription = (tipo) => {
    if (autenticadoAdulto) {
      let aux = null;
      if (datosAdulto.suscripciones)
        aux = datosAdulto.suscripciones.find((a) => a.activa === 1);
      if (aux) {
        Swal.fire({
          title: "Ya tienes una suscripción activa.",
          icon: "error",
          confirmButtonText: "ACEPTAR",
        });
      } else {
        let tipoS = tipo === 0 ? "básica" : tipo === 1 ? "media" : "oro";
        const data = {
          tipoS: tipoS,
          tipo: 0,
          usuario: datosAdulto.uid,
          fechaDesde: new Date().toLocaleDateString(),
          activa: 1,
        };
        guardarSuscripcion(data);
      }
    } else {
      Swal.fire({
        title: "Debes estar logueado para suscribirte.",
        icon: "error",
        confirmButtonText: "ACEPTAR",
      });
    }
  };

  let clase =
    index === 0
      ? "bg-grey-claro"
      : index === 1
      ? "bg-cyan-claro"
      : "background-adults";
  let color =
    index === 0 ? "text-black" : index === 1 ? "text-black" : "text-white";
  return (
    <Col
      className={`text-center ${color} rounded-3 ${clase} p-5 m-2`}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Row>
        <Col>
          <h4>{title}</h4>
        </Col>
      </Row>
      <Row
        className="mt-4"
        style={{ flex: 1, textAlign: "left", marginBottom: 10 }}
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
          <Button
            onClick={() => {
              suscription(index);
            }}
            className="btn-morado"
          >
            SUSCRIBIRSE
          </Button>
        </Col>
      </Row>
    </Col>
  );
};

export default Suscripcion;
