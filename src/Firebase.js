import "firebase/compat/auth";
import "firebase/compat/firestore";

import firebase from "firebase/compat/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyAMI-eLlPdbKHu3YNMEqBbX3irUim8Qa5I",
  // authDomain: "wampuk-4eebd.firebaseapp.com",
  // projectId: "wampuk-4eebd",
  // storageBucket: "wampuk-4eebd.appspot.com",
  // messagingSenderId: "726186696713",
  // appId: "1:726186696713:web:3ce97b563c914f54f918d8",
  apiKey: "AIzaSyD0w-bK1joqgXTc-8N0MBGn_RSNXks0eA8",
  authDomain: "wampuk2.firebaseapp.com",
  projectId: "wampuk2",
  storageBucket: "wampuk2.appspot.com",
  messagingSenderId: "337647498636",
  appId: "1:337647498636:web:6f2c046dcb0db2fed492a9",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const db = fire.firestore();
const auth = fire.auth();
export { auth };
export const usuariosDB = db.collection("usuarios");
export const ninosDB = db.collection("hijos");
export const suscripcionDB = db.collection("suscripcion");
