import React, { useEffect, useState } from "react";
import {db} from './Firebase';
import { addDoc, collection, getDocs } from "firebase/firestore";

const App = () => {
  const [task, setTask] = useState("");
  const [desc, setDesc] = useState("");
  const [data, setData] = useState([]);
  
  const collectionRef=collection(db,'crud');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(task, desc);
    await addDoc(collectionRef,{task,desc})
    console.log("Form is submitted succesfully! ")
    
    
  };
  
  
    useEffect(() => {
      const fetchData = async() =>{
        const fetch= await getDocs(collectionRef)
        setData(fetch.docs.map((doc)=>({
          ...doc.data(),id:doc.id
        })))
      }
      fetchData() 
      console.log(data) 
  
    }, [])


  return (
    <>
      <div className="main">
        <h1>Practice App</h1>
      </div>
      <form onSubmit={handleSubmit}>
        TO DO:
        <input
          onChange={(e) => setTask(e.target.value)}
          value={task}
          type="text"
        />
        <br />
        <br />
        Description:
        <input
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
          type="text"
        />
        <br />
        <input type="submit" />
      </form>
    </>
  );
};

export default App;
