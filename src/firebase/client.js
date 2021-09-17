import { auth, db } from "../Firebase";

import swal from "sweetalert";

export const loginAdult = async (correo, clave) => {
  return auth
    .signInWithEmailAndPassword(correo, clave)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      console.log(e);
      if (e.code === "auth/wrong-password") {
        swal({ title: "Usuario o contraseña incorrectos", icon: "warning" });
      } else if (e.code === "auth/user-not-found") {
        swal({ title: "Este correo no esta registrado", icon: "warning" });
      }
    });
};

export const loginChild = async (correo, clave) => {
  return db
    .collection("hijos")
    .where("usuario", "==", correo)
    .where("clave", "==", clave)
    .get()
    .then((res) => {
      return res;
    })
    .catch((err) => {
      swal({
        title: "Ha ocurrido un error intentalo nuevamente",
        icon: "warning",
      });
      console.log(err);
    });
};

export const createAdult = async (correo, clave) => {
  return auth
    .createUserWithEmailAndPassword(correo, clave)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      if (e.code === "auth/email-already-in-use") {
        swal({ title: "Este usuario ya existe !", icon: "warning" });
      }
    });
};

export const createChild = async (correo, clave, adult) => {
  return db
    .collection("hijos")
    .add({
      usuario: correo,
      clave: clave,
      padre: adult,
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      swal({
        title: "No se pudo crear la cuenta de tu hijo",
        icon: "warning",
      });
      console.error("Error writing document: ", error);
    });
};
