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
  apiKey: "AIzaSyDGzNURAT4jLhKpS8iC6wH-V8geE8wHLrI",

  authDomain: "hosting-87370.firebaseapp.com",

  projectId: "hosting-87370",

  storageBucket: "hosting-87370.appspot.com",

  messagingSenderId: "809920948971",

  appId: "1:809920948971:web:962cc280444a3332b36cae",

  measurementId: "G-J339GPV66B",
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
