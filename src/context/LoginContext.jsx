import React, { useEffect, useState } from "react";
import {
  createAdult,
  createChild,
  getAdult,
  getChildren,
  getCursosDelNino,
  getNino,
  getSuscriptionsByUser,
  loginAdult,
  loginChild,
  resendEmail,
  saveSuscription,
  updateAdult,
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
    if (response.docs.length === 0) {
      Swal.fire({
        title: "Usuario o contraseña incorrectos.",
        confirmButtonText: "ACEPTAR",
        icon: "error",
      });
      return "error";
    }
    let nino = await getNino(response.docs[0].id);
    nino.cursos = await getCursosDelNino(response.docs[0].id);
    setDatosNino(nino);
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
    let usuario = await getAdult(response.user.uid);
    usuario = {
      ...usuario,
      hijos: await getChildren(response.user.uid),
      suscripciones: await getSuscriptionsByUser(response.user.uid),
    };
    setDatosAdulto(usuario);
    setAutenticadoAdulto(true);
    return usuario.hijos.length === 0 ? "children" : "success";
  };

  const crearCuentaAdulto = async (clave, usuario) => {
    const response = await createAdult(clave, usuario);
    if (response) return "success";
    return "error";
  };

  const crearCuentaNino = async (correo, clave) => {
    await createChild(correo, clave, datosAdulto.uid);
    const hijos = await getChildren(datosAdulto.uid);
    const aux = { ...datosAdulto, hijos: hijos };
    setDatosAdulto(aux);
    Swal.fire({
      title: "¡La cuenta deL niñx ha sido creada correctamente!",
      confirmButtonText: "ACEPTAR",
      icon: "success",
    });
    return "success";
  };

  const actualizarUsuario = async (data) => {
    await updateAdult(data);
    const aux = {
      ...datosAdulto,
      nombre: data.nombre,
      apellido: data.apellido,
    };
    setDatosAdulto(aux);
    Swal.fire({
      title: "¡Tus datos han sido actualizados correctamente!",
      confirmButtonText: "ACEPTAR",
      icon: "success",
    });
    return "success";
  };

  const guardarSuscripcion = async (data) => {
    await saveSuscription(data);
    const suscripciones = await getSuscriptionsByUser(datosAdulto.uid);
    const aux = { ...datosAdulto, suscripciones: suscripciones };
    setDatosAdulto(aux);
    Swal.fire({
      title: "¡La suscripción se ha registrado correctamente!",
      confirmButtonText: "ACEPTAR",
      icon: "success",
    });
    return "success";
  };

  useEffect(() => {
    const localAdulto = localStorage.getItem("adulto");
    const localNino = localStorage.getItem("nino");
    if (!localAdulto) localStorage.setItem("adulto", JSON.stringify([]));
    else {
      if (localAdulto.length > 2) {
        setAutenticadoAdulto(true);
        setDatosAdulto(JSON.parse(localAdulto));
      }
    }
    if (!localNino) localStorage.setItem("nino", JSON.stringify([]));
    else {
      if (localNino.length > 2) {
        setAutenticadoNino(true);
        setDatosNino(JSON.parse(localNino));
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("adulto", JSON.stringify(datosAdulto));
    localStorage.setItem("nino", JSON.stringify(datosNino));
  }, [datosAdulto, datosNino]);

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
        guardarSuscripcion,
        actualizarUsuario,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
