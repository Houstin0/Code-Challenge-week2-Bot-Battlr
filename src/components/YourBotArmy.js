import React from "react"
import BotCard from "./BotCard"
import { Container } from "react-bootstrap"

function YourBotArmy({bots,army,handleArmySwitch}) {
    const armyBots=bots.filter((bot)=> army.includes(bot.id))
   const handleDischarge=((botId)=>{
    handleArmySwitch(botId)
   })
    return(
        <>
            <h2>Your Bot Army</h2>
            <Container className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {armyBots.map((bot)=>
              <div key={bot.id}>
                  <BotCard bot={bot} handleClick={handleDischarge} />
              </div>
            )}
            </Container>
            
        </>
    )
}
export default YourBotArmy