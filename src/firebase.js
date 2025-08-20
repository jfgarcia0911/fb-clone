import firebase from "firebase/compat/app";
import "firebase/compat/storage";  // <-- Compat package
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6t3IfTR87-3cpP3ft8iwHYIb-p4IA81o",
  authDomain: "fb-clone-6b2f9.firebaseapp.com",
  projectId: "fb-clone-6b2f9",
  storageBucket: "fb-clone-6b2f9.firebasestorage.app",
  messagingSenderId: "636445114855",
  appId: "1:636445114855:web:4dd091d729cac25f707d42"
};

const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();
export const storage = firebase.storage();


