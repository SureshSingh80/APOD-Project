import { useEffect } from "react";
import { useState } from "react"
import Display from "./components/Display";

 function  App() {
  
    const [data,setData]=useState();
    const [loading,setLoading]=useState(true);
    const key=import.meta.env.VITE_APOD_KEY;

    useEffect(()=>{
      
      const fetchData=async()=>{
        try{
          const res=await fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`);
          const jsonResponse=await res.json();
          setData(jsonResponse);
          setLoading(false);
        }
        catch(err){
          console.log(err.message);
        }
      }
      fetchData();
      
    },[]);

    console.log("app= ",data);
  return (
    <>
      <Display data={data} loading={loading}></Display>
    </>
  )
}

export default App
