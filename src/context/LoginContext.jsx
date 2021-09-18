import React, { useEffect, useState } from "react";
import {
  createAdult,
  createChild,
  loginAdult,
  loginChild,
  resendEmail,
} from "../firebase/client";

import Swal from "sweetalert2";

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
    if (!response) {
      Swal.fire({
        title: "Usuario o contraseña incorrectos.",
        confirmButtonText: "ACEPTAR",
        icon: "error",
      });
      return "error";
    }
    setDatosNino(response.docs[0].id);
    setAutenticadoNino(true);
    Swal.fire({
      title: "¡Bienvenido " + correo + " a Wampuk!",
      confirmButtonText: "ACEPTAR",
      icon: "success",
    });
    return "success";
  };

  const loginAdulto = async (correo, clave) => {
    const response = await loginAdult(correo, clave);
    if (!response) {
      Swal.fire({
        title: "Usuario o contraseña incorrectos.",
        confirmButtonText: "ACEPTAR",
        icon: "error",
      });
      return "error";
    }
    if (!response.user.emailVerified) {
      Swal.fire({
        title: `Aún no has verificado tu correo electrónico. Ingresá a ${response.user.email} para hacerlo antes de operar en Wampuk.`,
        confirmButtonText: "REENVIAR",
        showCancelButton: true,
        cancelButtonText: "CANCELAR",
        reverseButtons: true,
        icon: "info",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await resendEmail();
          Swal.fire({
            title: `El correo electrónico ha sido reenviado a la casilla ${correo}. Verificalo para poder operar en Wampuk.`,
            confirmButtonText: "ACEPTAR",
            icon: "info",
          });
        }
      });
      return "success";
    }
    setDatosAdulto(response.user);
    setAutenticadoAdulto(true);
    Swal.fire({
      title: "¡Bienvenido " + correo + " a Wampuk!",
      icon: "success",
      confirmButtonText: "ACEPTAR",
    });
    return "success";
  };

  const crearCuentaAdulto = async (correo, clave) => {
    const response = await createAdult(correo, clave);
    if (response) return "success";
    return "error";
  };

  const crearCuentaNino = async (correo, clave) => {
    await createChild(correo, clave, datosAdulto.uid);
    Swal.fire({
      title: "¡La cuenta deL niñx ha sido creada correctamente!",
      confirmButtonText: "ACEPTAR",
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
        cerrarSesion,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
