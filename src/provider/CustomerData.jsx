import { useEffect, useState } from "react";
import { database } from "../firebase";
import { onSnapshot } from "firebase/firestore";
import { customerData } from "../context";
import { usersRef } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
export default function CustomerDataProvider({ children }) {
  const [data, setData] = useState("");
  const [user, loading, error] = useAuthState(database);
  const getData = () => {
    return onSnapshot(usersRef, (snapshot) => {
      let books = [];
      snapshot.docs.forEach((docs) => {
        if(docs.data().email === user?.email){
          books.push({ ...docs.data() });    
        }
          
        
      });
      setData(books)
    });
  };

  useEffect(() => {
    getData();
  }, []);

  

  // alldata.filter(single => single.email == email)
  return (
    <>
      <customerData.Provider value={data}>{children}</customerData.Provider>
    </>
  );
}
