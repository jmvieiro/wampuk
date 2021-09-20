import React, { useContext, useEffect, useState } from "react";

import { ListGroup } from "react-bootstrap";
import { LoginContext } from "../context/LoginContext";
import ModalNewAccount from "../components/modalNewAccount";
import Swal from "sweetalert2";
import { updateAdult } from "../firebase/client";
import { useHistory } from "react-router";

function MiCuenta2() {
  const [showCrearNino, setShowCrearNino] = useState(false);
  const { datosAdulto, autenticadoAdulto } = useContext(LoginContext);
  const [nombre, setNombre] = useState(datosAdulto.nombre);
  const [apellido, setApellido] = useState(datosAdulto.apellido);
  const history  = useHistory();

  useEffect(() => {
    if (!autenticadoAdulto) history.push("/adultos");
  }, [autenticadoAdulto, history]);

  const guardar = async () => {
    const resultado = await updateAdult({
      nombre: nombre,
      apellido: apellido,
      id: datosAdulto.id,
    });
    if (resultado) {
      Swal.fire({
        title: "Datos actualizados",
        confirmButtonText: "ACEPTAR",
        icon: "success",
      });
    }
  };

  return (
    <>
      Mis datos
      <form
        onSubmit={(e) => {
          e.preventDefault();
          guardar();
        }}
      >
        <label>Name:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => {
            const { value } = e.target;
            setNombre(value);
          }}
        />
        <label>Apellido:</label>
        <input
          type="text"
          value={apellido}
          onChange={(e) => {
            const { value } = e.target;
            setApellido(value);
          }}
        />
        <button className="btn btn-block btn-success" type="submit">
          Guardar
        </button>
      </form>
      Mis niñxs
      {datosAdulto.hijos && datosAdulto.hijos.length > 0 ? (
        <ListGroup>
          {datosAdulto.hijos.map((hijo, index) => {
            return <ListGroup.Item key={index}> {hijo.usuario}</ListGroup.Item>;
          })}
        </ListGroup>
      ) : (
        <h1>no tienes ninx</h1>
      )}
      <button
        className="btn btn-block btn-success"
        onClick={() => {
          setShowCrearNino(true);
        }}
        type="submit"
      >
        Agregar ninx
      </button>
      Mi suscripcion
      {datosAdulto.suscripciones && datosAdulto.suscripciones.length > 0 ? (
        <ListGroup>
          {datosAdulto.suscripciones.map((sus, index) => {
            return (
              <ListGroup.Item key={index}>
                {sus.fechaDesde}-{sus.tipo}-{sus.tipoS}-{sus.activa}
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      ) : (
        <span>aun no estas suscrito </span>
      )}
      {/* modal */}
      <ModalNewAccount
        adult={false}
        showCrearNino={showCrearNino}
        setShowCrearNino={setShowCrearNino}
      />
    </>
  );
}

export default MiCuenta2;
