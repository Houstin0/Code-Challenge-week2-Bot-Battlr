import React,{useState,useEffect} from 'react';
import BotCollection from "./components/BotCollection"
import YourBotArmy from './components/YourBotArmy';

function App() {
  const [bots,setBots]=useState([])
  const [army, setArmy]=useState([])

  useEffect(()=>{
    fetch("https://server-data-7j6w.onrender.com/bots")
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
      <h1>Bot Battlr</h1>
      <YourBotArmy bots={bots} army={army}/>
       <BotCollection bots={bots} enlistBot={enlistBot}/>
    </div>
  );
}

export default App;
