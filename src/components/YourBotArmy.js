import React from "react"
import BotCard from "./BotCard"

function YourBotArmy({bots,army}) {
    const armyBots=bots.filter((bot)=> army.includes(bot.id))

    return(
        <>
            <h2>Your Bot Army</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {armyBots.map((bot)=>
              <div key={bot.id}>
                  <BotCard bot={bot} handleClick={()=>{}} bottonText="Release"/>
              </div>
            )}
            </div>
            
        </>
    )
}
export default YourBotArmy