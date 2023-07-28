import React from "react"
import BotCard from "./BotCard"

function YourBotArmy({bots,army,enlistBot}) {
    const armyBots=bots.filter((bot)=> army.includes(bot.id))

    return(
        <div>
            <h2>Your Bot Army</h2>
            <ul>
            {armyBots.map((bot)=>
              <li key={bot.id}>
                  <BotCard bot={bot} handleClick={()=>enlistBot(bot.id)} bottonText="Release"/>
              </li>
            )}
            </ul>
            
        </div>
    )
}
export default YourBotArmy