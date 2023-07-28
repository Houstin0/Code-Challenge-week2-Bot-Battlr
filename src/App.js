import './App.css';
import React,{useState,useEffect} from 'react';
import BotCollection from "./components/BotCollection"

function App() {
  const [bots,setBots]=useState([])

  useEffect(()=>{
    fetch("http://localhost:3000/bots")
    .then((response)=>response.json())
    .then((data)=>setBots(data))
  },[])
  return (
    <div className="App">
       <BotCollection bots={bots}/>
    </div>
  );
}

export default App;
