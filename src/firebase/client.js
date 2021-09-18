import { auth, db } from "../Firebase";
import { getAuth, sendEmailVerification } from "firebase/auth";

import Swal from "sweetalert2";

export const loginAdult = async (correo, clave) => {
  return auth
    .signInWithEmailAndPassword(correo, clave)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      console.log(e);
      if (e.code === "auth/wrong-password") {
        Swal.fire({
          title: "Usuario o contraseña incorrectos.",
          icon: "error",
        });
      } else if (e.code === "auth/user-not-found") {
        Swal.fire({ title: "Este correo no está registrado.", icon: "error" });
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
      Swal.fire({
        title: "Ha ocurrido un error intentalo nuevamente.",
        icon: "warning",
      });
      console.log(err);
    });
};

export const createAdult = async (correo, clave) => {
  return auth
    .createUserWithEmailAndPassword(correo, clave)
    .then((res) => {
      const auth = getAuth();
      sendEmailVerification(auth.currentUser).then(() => {
        // Email verification sent!
        // ...
      });
      return res;
    })
    .catch((e) => {
      if (e.code === "auth/email-already-in-use") {
        Swal.fire({
          title: "¡Este usuario ya se encuentra registrado!",
          icon: "error",
          confirmButtonText: "ACEPTAR",
        });
      }
    });
};

export const resendEmail = async () => {
  const auth = getAuth();
  sendEmailVerification(auth.currentUser)
    .then(() => {
      return "success";
    })
    .catch((e) => {
      Swal.fire({
        title: "Error al reenviar el correo electrónico.",
        icon: "error",
        confirmButtonText: "ACEPTAR",
      });
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
      Swal.fire({
        title: "No se pudo crear la cuenta del niñx.",
        icon: "error",
      });
      console.error("Error writing document: ", error);
    });
};
