import {
  auth,
  cursoDB,
  ninosDB,
  suscripcionDB,
  suscripcion_usuarioDB,
  usuariosDB,
} from "../Firebase";
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
  return ninosDB
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
        saveUser(usuario);
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
  return ninosDB
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

const saveUser = (usuario) => {
  usuariosDB.add(usuario).catch((res) => {
    Swal.fire({
      title: "No se pudo guardar los datos del adulto.",
      icon: "error",
    });
    console.error("Error writing document: ", res);
  });
};

export const getAdult = async (id) => {
  return await usuariosDB
    .where("uid", "==", id)
    .get()
    .then((response) => {
      let usuario = response.docs[0].data();
      usuario.id = response.docs[0].id;
      return usuario;
    })
    .catch((res) => {
      Swal.fire({
        title: "No se pudo obtener los datos del adulto.",
        icon: "error",
      });
      console.error("Error writing document: ", res);
    });
};

export const updateAdult = async (data) => {
  try {
    await usuariosDB.doc(data.id).update({
      nombre: data.nombre,
      apellido: data.apellido,
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

export const getChildren = async (id) => {
  try {
    return ninosDB
      .where("padre", "==", id)
      .get()
      .then((response) => {
        return response.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
      });
  } catch (res) {
    Swal.fire({
      title: "No se pudo obtener los hijos del adulto.",
      icon: "error",
    });
    console.error("Error writing document: ", res);
  }
};

export const saveSuscription = async (data) => {
  suscripcion_usuarioDB.add(data).catch((res) => {
    Swal.fire({
      title: "No se pudo guardar los datos de la suscripción.",
      icon: "error",
    });
    console.error("Error writing document: ", res);
  });
};

export const getSuscriptionsByUser = async (id) => {
  try {
    const response = await suscripcion_usuarioDB
      .where("usuario", "==", id)
      .where("activa", "==", 1)
      .get();
    return response.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
  } catch (res) {
    Swal.fire({
      title: "No se pudo obtener la suscripción del adulto.",
      icon: "error",
    });
    console.error("Error writing document: ", res);
  }
};

export const getSuscriptions = async () => {
  try {
    const response = await suscripcionDB.orderBy("orden").get();
    return response.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
  } catch (res) {
    Swal.fire({
      title: "No se pudo obtener los datos de las suscripciones.",
      icon: "error",
    });
    console.error("Error writing document: ", res);
  }
};

export const getCursos = async () => {
  try {
    const response = await cursoDB.orderBy("fechaCreacion").get();
    return response.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
  } catch (res) {
    Swal.fire({
      title: "No se pudo obtener los datos de los cursos.",
      icon: "error",
    });
    console.error("Error writing document: ", res);
  }
};
