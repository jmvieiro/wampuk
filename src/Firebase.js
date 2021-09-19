// import firebase from 'firebase'

import "firebase/compat/firestore";
import "firebase/compat/auth";

import firebase from "firebase/compat/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMI-eLlPdbKHu3YNMEqBbX3irUim8Qa5I",
  authDomain: "wampuk-4eebd.firebaseapp.com",
  projectId: "wampuk-4eebd",
  storageBucket: "wampuk-4eebd.appspot.com",
  messagingSenderId: "726186696713",
  appId: "1:726186696713:web:3ce97b563c914f54f918d8",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const db = fire.firestore();
const auth = fire.auth();
export { db, auth };
export const usuariosDB = db.collection("usuarios");
