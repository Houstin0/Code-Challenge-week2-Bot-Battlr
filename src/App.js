import React,{useState,useEffect} from 'react';
import BotCollection from "./components/BotCollection"
import YourBotArmy from './components/YourBotArmy';
import BotSpecs from "./components/BotSpecs"

function App() {
  const [bots,setBots]=useState([])
  const [army, setArmy]=useState([])
  const [selectedBot,setSelectedBot]=useState(null)

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
function dischargeBot(id) {
  setArmy(army.filter((botId)=>botId!==id))
}

function handleBotClick(botId) {
  const bot=bots.find((bot)=>bot.id===botId)
  setSelectedBot(bot)
}
function handleBackClick(){
  setSelectedBot(null)
}

  return (
    <div className="App">
      <h1>Bot Battlr</h1>
      {selectedBot?(
        <BotSpecs
        bot={selectedBot}
        army={army}
        handleEnlist={enlistBot}
        handleBackClick={handleBackClick}
        />):(
          <>
          <YourBotArmy 
          bots={bots} 
          army={army} 
          handleDischarge={dischargeBot}
          />
        <br></br>
          <BotCollection 
          bots={bots} 
          handleBotClick={handleBotClick}
          />
          </>
        )}
    </div>
  );
}

export default App;
