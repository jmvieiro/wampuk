import React, { useContext } from "react";
import { faSignOutAlt, faUserCircle } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";
import { NavDropdown } from "react-bootstrap";

const UserMenu = ({ adult }) => {
  const { autenticadoAdulto, datosAdulto, datosNino, cerrarSesion } =
    useContext(LoginContext);

  return (
    <NavDropdown
      className={`nav-link rounded-3 px-2 p-0 ${
        adult ? "background-children" : "background-adults"
      }`}
      title={[
        <FontAwesomeIcon
          icon={faUserCircle}
          title="Usuario"
          size="lg"
          key={0}
          className={adult ? "text-black" : "text-white"}
        />,
        <span key={1} className={`px-1 ${adult ? "text-black" : "text-white"}`}>
          {autenticadoAdulto
            ? `${datosAdulto.nombre} ${datosAdulto.apellido}`
            : `${datosNino}`}
        </span>,
      ]}
    >
      <NavDropdown.Item className={`py-1 px-3`}>
        <FontAwesomeIcon
          icon={faUserCircle}
          title="Usuario"
          size="lg"
          className="me-2"
        />
        {autenticadoAdulto ? datosAdulto.correo : datosNino}
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item className={`py-1 px-3`}>
        <FontAwesomeIcon
          icon={faUserCircle}
          title="Usuario"
          size="lg"
          className="me-2"
        />
        {autenticadoAdulto ? (
          <Link to="/micuenta">Mi cuenta</Link>
        ) : (
          <Link to="/micofre">Mi cofre</Link>
        )}
      </NavDropdown.Item>

      <NavDropdown.Item
        className={`py-1 px-3`}
        onClick={() => {
          cerrarSesion();
        }}
      >
        <FontAwesomeIcon
          icon={faSignOutAlt}
          title="Cerrar sesiòn"
          size="lg"
          className="me-2"
        />
        Cerrar sesión
      </NavDropdown.Item>
    </NavDropdown>
  );
};

export default UserMenu;
