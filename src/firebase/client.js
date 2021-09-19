import { auth, db, usuariosDB,ninosDB, suscripcionDB } from "../Firebase";
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

export const createAdult = async (clave, usuario) => {
  return auth
    .createUserWithEmailAndPassword(usuario.correo, clave)
    .then((res) => {
      const auth = getAuth();
      sendEmailVerification(auth.currentUser).then(() => {
        usuario.uid = res.user.uid;
        guardarUsuario(usuario);
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

const guardarUsuario = (usuario) => {
  usuariosDB.add(usuario).catch((res) => {
    Swal.fire({
      title: "No se pudo guardar los datos del adulto.",
      icon: "error",
    });
    console.error("Error writing document: ", res);
  });
};

export const getAdult = async (id) => {
  try {
    const response = await usuariosDB.where("uid", "==", id).get();
    let usuario = response.docs[0].data();
    usuario.uidinterno = response.docs[0].id;
    return usuario;
  } catch (res) {
    Swal.fire({
      title: "No se pudo obtener los datos del adulto.",
      icon: "error",
    });
    console.error("Error writing document: ", res);
  }
};
export const setAdult = async (data) => {
  try {
    const response = await usuariosDB.doc(data.id).update({
      nombre:data.nombre,
      apellido:data.apellido
    });
    return true;
  } catch (res) {
    Swal.fire({
      title: "No se pudo obtener los datos del adulto.",
      icon: "error",
    });
    console.error("Error writing document: ", res);
  }
};
export const getChildens = async (id) => {
  try {
    const response = await ninosDB.where("padre", "==", id).get();

    return response.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
    // return response.docs[0].data();
  } catch (res) {
    Swal.fire({
      title: "No se pudo obtener los datos del adulto.",
      icon: "error",
    });
    console.error("Error writing document: ", res);
  }
};

export const guardarSuscripcion = (data) => {
  suscripcionDB.add(data).catch((res) => {
    Swal.fire({
      title: "No se pudo guardar los datos del adulto.",
      icon: "error",
    });
    console.error("Error writing document: ", res);
  });
};

export const getSuscription = async (id) => {
  try {
    const response = await suscripcionDB.where("usuario", "==", id).get();

    return response.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
    // return response.docs[0].data();
  } catch (res) {
    Swal.fire({
      title: "No se pudo obtener los datos del adulto.",
      icon: "error",
    });
    console.error("Error writing document: ", res);
  }
};

