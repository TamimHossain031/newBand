import { useEffect, useState } from "react";

import { onSnapshot } from "firebase/firestore";
import { customerData } from "../context";
import { usersRef } from "../firebase";

export default function CustomerDataProvider({ children }) {
  const [data, setData] = useState("");

  const getData = () => {
    return onSnapshot(usersRef, (snapshot) => {
      let books = [];
      snapshot.docs.forEach((docs) => {
        
          books.push({ ...docs.data() });    
        
          return books;
        
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
