import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { addDoc, collection, getDocs, getFirestore,doc, updateDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2cZErJ0wrgn-UHDe-6E0ODPngbJs9ggE",

  authDomain: "newone-92cf9.firebaseapp.com",

  projectId: "newone-92cf9",

  storageBucket: "newone-92cf9.appspot.com",

  messagingSenderId: "101165449534",

  appId: "1:101165449534:web:76492614cd669c5c1bac6f",
};

const app = initializeApp(firebaseConfig);
const database = getAuth(app);
const db = getFirestore();
const colRef = collection(db, "transiction");
const usersRef = collection(db,'users')


// adding
const adding = (data,type) => {
  if(type === 'users'){
    addDoc(usersRef, data);
  }else{
    addDoc(colRef, data);
  }
 
};


//update Data 

const update =(email,data)=>{
  const docRef = doc(db,'users',email);
  updateDoc(docRef,{
    pin : data
  }).then(()=> alert('set Data'))
  
}



const registerWithEmailAndPass = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(database, email, password);
    const user = res.user;
  } catch (err) {
    console.error(err);
  }
};

export { update,usersRef,adding, database, registerWithEmailAndPass };
