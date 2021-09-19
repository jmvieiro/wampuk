import { Button, Col, Row } from "react-bootstrap";
import { LoginContext } from "../context/LoginContext";

import React, { useContext } from "react";
import Swal from "sweetalert2";
import { guardarSuscripcion } from "../firebase/client";

const Suscripcion = ({ title, p1, p2, p3, index, id }) => {
  const { datosAdulto,autenticadoAdulto } = useContext(LoginContext);

  const suscription = (tipo) => {
    if(autenticadoAdulto===true){
      let tipoS='';
      if(tipo ===0){
        tipoS='básica'
      }else if(tipo===1){
        tipoS='media'
      }else if(tipo===2){
        tipoS='oro'
      }
      const data = {
        tipo:tipoS,
        usuario:datosAdulto.uid,
        fechaI: new Date().toLocaleDateString()
      }
      guardarSuscripcion(data);
      Swal.fire({
        title: "Te has siscrito correctamente",
        icon: "success",
        confirmButtonText: "ACEPTAR",
      });
    }else{
      Swal.fire({
        title: "Debes estar logeado para suscribirte",
        icon: "error",
        confirmButtonText: "ACEPTAR",
      });
    }
  }

  let clase =
    index === 0
      ? "bg-grey-claro"
      : index === 1
      ? "bg-cyan-claro"
      : "background-adults";
  let color =
    index === 0 ? "text-black" : index === 1 ? "text-black" : "text-white";
  return (
    <Col className={`text-center ${color} rounded-3 ${clase} p-5 m-2`}>
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
          <Button onClick={()=>{suscription(index)}} className="btn-morado">SUSCRIBIRSE</Button>
        </Col>
      </Row>
    </Col>
  );
};

export default Suscripcion;
