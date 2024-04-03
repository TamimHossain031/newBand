import { ref, set } from "firebase/database";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { uid } from "uid";
import { database,adding,update} from "../firebase";
export default function SetData({ onClose }) {
  
  const [userDetails,setUserDetails] = useState({})

  const [user, loading, error] = useAuthState(database);

 

 

  const createUsers = (e)=>{
   
    setUserDetails({
      ...userDetails,
      email:user.email,
      
      [e.target.name]:e.target.value
    })
  }


    
  
  
  
  
  const createTransiction = () => {
    adding(userDetails,'users');
    onClose();
    
  };
  return (
    <section className="fixed top-10 left-1/3 bg-sky-500 p-10 space-y-6">
      <div className="border space-y-2 flex flex-col p-2">
      <p>
        Amount: <input type="number" name="amount" onChange={createUsers} />
      </p>
      <p>Pin : <input type="number" name="pin" onChange={createUsers}/></p>
      <p>Name : <input type="text" name="name" onChange={createUsers}/></p>
     
      </div>


      <div className="border space-y-2 flex flex-col p-2">
      <p>
        Time : <input type="text" name="time" onChange={createUsers} />
      </p>
      <p>
        transiction Amount :{" "}
        <input type="text" name="tAmount" onChange={createUsers} />
      </p>
      <p>
        From/To : <input type="text" name="fromTo" onChange={createUsers} />
      </p>
      <p>
        Status : <input type="text" name="status" onChange={createUsers} />
      </p>
      <button className="border ml-3 p-3 text-white" onClick={createTransiction}>
        submit
      </button>
      </div>
    
     
      
      <button className="border px-4 text-red-600" onClick={onClose}>
        x
      </button>
      
     
    </section>
  );
}
