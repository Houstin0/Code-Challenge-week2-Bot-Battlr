import React from "react"
import BotCard  from "./BotCard"
function BotCollection({bots,enlistBot}) {
    return(
        <div>
            <h2>Bot Collection</h2>
            <ul>
            {bots.map((bot)=>
            <li key={bot.id}>
             <BotCard  bot={bot} handleClick={()=>enlistBot(bot.id)} buttonText="Enlist"/>
            </li>
           )}
            </ul>
           

        </div>
    )
}
export default BotCollection