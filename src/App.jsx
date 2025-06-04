import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Button from "./Button";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  //first type
  useEffect(() => {
    console.log("ewnders when page mounts or starts");
  }, []);

  //second type
  // useEffect(()=>{
  //   console.log("renders when page mounts or starts or when array dependency is triggered  ")
  // },[count])

  // //third type
  // useEffect(()=>{
  //   console.log("useEffect that triggers everytime")
  // })

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}

export default App;
