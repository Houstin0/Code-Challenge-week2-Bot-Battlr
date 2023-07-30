import React,{useState,useEffect} from 'react';
import BotCollection from "./components/BotCollection"
import YourBotArmy from './components/YourBotArmy';
import BotSpecs from "./components/BotSpecs"
import SortBar from "./components/SortBar"

function App() {
  const [bots,setBots]=useState([])
  const [army, setArmy]=useState([])
  const [selectedBot,setSelectedBot]=useState(null)
  const [sortBy,setSortBy]=useState("")

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

function handleSort(sortBy) {
  setSortBy(sortBy)
}


function sortBots() {
  let sortedBots;

  if (sortBy === 'health') {
    sortedBots = [...bots].sort((a, b) => b.health - a.health);
  } else if (sortBy === 'damage') {
    sortedBots = [...bots].sort((a, b) => b.damage - a.damage);
  } else if (sortBy === 'armor') {
    sortedBots = [...bots].sort((a, b) => b.armor - a.armor);
  } else {
    sortedBots = bots;
  }

  return sortedBots;
}


  return (
    <div className="App">
      <h1>Bot Battlr</h1>
      <YourBotArmy 
          bots={bots} 
          army={army} 
          handleDischarge={dischargeBot}
          />
          <br></br>
      {selectedBot?(
        <BotSpecs
        bot={selectedBot}
        army={army}
        handleEnlist={enlistBot}
        handleBackClick={handleBackClick}
        handleDischarge={dischargeBot}
        />):(
          <>
          <SortBar
          handleSort={handleSort}
          />
          <BotCollection 
          bots={sortBots()} 
          handleBotClick={handleBotClick}
          />
          </>
        )}
    </div>
  );
}

export default App;
