import './App.css';
import React,{useState,useEffect} from 'react';
import BotCollection from "./components/BotCollection"
import YourBotArmy from './components/YourBotArmy';

function App() {
  const [bots,setBots]=useState([])
  const [army, setArmy]=useState([])

  useEffect(()=>{
    fetch("http://localhost:3000/bots")
    .then((response)=>response.json())
    .then((data)=>setBots(data))
  },[])

  function enlistBot(id) {
    if(!army.includes(id)){
      setArmy([...army,id])
    }
  }

  return (
    <div className="App">
      <YourBotArmy bots={bots} army={army} enlistBot={enlistBot}/>
       <BotCollection bots={bots} enlistBot={enlistBot}/>
    </div>
  );
}

export default App;
