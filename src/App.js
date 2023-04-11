import React, { useState,useEffect } from 'react'
import './App.css';
import NewForm from './component/NewForm';
function App() {
  const [showP, stP] = useState("")
  const [showT, stT] = useState("")

  useEffect((e)=>{
    console.log(showP)
    console.log(showT)
  })
  return (
    <div className="App">
    <h1>75% Attendance</h1>
      <NewForm p={stP} t={stT} />
    </div>
  );
}

export default App;
