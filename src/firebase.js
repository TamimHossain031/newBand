import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_API_KEY}`,

  authDomain: "projectone-6678d.firebaseapp.com",

  projectId: "projectone-6678d",

  storageBucket: "projectone-6678d.appspot.com",

  messagingSenderId: "55077998772",

  appId: "1:55077998772:web:eba3b194bd8be26ca507e1",

  measurementId: "G-4NSH6C8RCS",
};

const app = initializeApp(firebaseConfig);
const database = getAuth(app);
const db = getFirestore();
const colRef = collection(db, "transiction");
const usersRef = collection(db, "users");

// adding
const adding = (data, type) => {
  if (type === "users") {
    addDoc(usersRef, data);
  } else {
    addDoc(colRef, data);
  }
};

//update Data

const update = (email, data) => {
  const docRef = doc(db, "users", email);
  updateDoc(docRef, {
    pin: data,
  }).then(() => alert("set Data"));
};

const registerWithEmailAndPass = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(database, email, password);
    const user = res.user;
  } catch (err) {
    console.error(err);
  }
};

export { adding, database, registerWithEmailAndPass, update, usersRef };
