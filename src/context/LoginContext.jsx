import React, { useEffect, useState } from "react";
import {
  createAdult,
  createChild,
  loginAdult,
  loginChild,
} from "../firebase/client";

import swal from "sweetalert";

export const LoginContext = React.createContext();

export const LoginProvider = ({ children }) => {
  // datos Padre y nino
  const [datosNino, setDatosNino] = useState([]);
  const [datosAdulto, setDatosAdulto] = useState([]);
  // controla la autenticacion del usuario si esta o no esta autenticado (Adulto y nino)
  const [autenticadoNino, setAutenticadoNino] = useState(false);
  const [autenticadoAdulto, setAutenticadoAdulto] = useState(false);

  const cerrarSesion = () => {
    setDatosNino([]);
    setDatosAdulto([]);
    setAutenticadoAdulto(false);
    setAutenticadoNino(false);
  };

  const loginNino = async (correo, clave) => {
    const response = await loginChild(correo, clave);
    if (response.empty) {
      swal({
        title: "Usuario o contraseña incorrectos",
        icon: "warning",
      });
      return "error";
    }
    setDatosNino(response.docs[0].id);
    setAutenticadoNino(true);
    swal({ title: "Genial ya estas en Wampuk", icon: "success" });
    return "success";
  };

  const loginAdulto = async (correo, clave) => {
    const response = await loginAdult(correo, clave);
    if (response.empty) {
      swal({
        title: "Usuario o contraseña incorrectos",
        icon: "warning",
      });
      return "error";
    }
    setDatosAdulto(response.user);
    setAutenticadoAdulto(true);
    swal({ title: "Acceso correcto a wampuk", icon: "success" });
    return "success";
  };

  const crearCuentaAdulto = async (correo, clave) => {
    const response = await createAdult(correo, clave);
    setDatosAdulto(response.user);
    setAutenticadoAdulto(true);
    swal({ title: "Usuario registrado correctamente", icon: "success" });
    return "success";
  };

  const crearCuentaNino = async (correo, clave) => {
    await createChild(correo, clave, datosAdulto.uid);
    swal({
      title: "La cuenta de tu hijo se ha creado correctamente",
      icon: "success",
    });
    return "success";
  };

  useEffect(() => {}, []);

  return (
    <LoginContext.Provider
      value={{
        datosNino,
        autenticadoNino,
        datosAdulto,
        autenticadoAdulto,
        loginNino,
        loginAdulto,
        crearCuentaAdulto,
        crearCuentaNino,
        cerrarSesion
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
