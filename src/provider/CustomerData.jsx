import { onValue, ref, update } from "firebase/database";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { customerData } from "../context";
import { database,usersRef } from "../firebase";
import { onSnapshot,query } from "firebase/firestore";

export default function CustomerDataProvider({ children }) {
  const [user, loading, error] = useAuthState(database);
  const [data, setData] = useState('');

  
  
  const getData = () => {  
   
      onSnapshot(usersRef,(snapshot) => {
        let books = [];
        snapshot.docs.forEach((docs) => {
         
            books.push({ ...docs.data()});
          
         
        });
       setData(books)
      })
  };
  

useEffect(()=>{
  getData()
},[]) 
  


  return (
    <>
      <customerData.Provider value={data}>
        {children}
        </customerData.Provider>
    </>
  );
}
