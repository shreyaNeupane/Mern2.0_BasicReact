import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Button from "./Button";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [name , setName] = useState("shreya");

  return (
    <>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>+</button>
    <h1>{name}</h1>
    <button onClick={()=> setName("shreya neupane")}>changename</button>
    </>
  );
}

export default App;
