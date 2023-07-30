import React from "react"
import BotCard  from "./BotCard"
import { Container } from "react-bootstrap"
function BotCollection({bots,handleArmySwitch}) {
    return(
        <>
        <h2>Bot Collection</h2>
        <Container className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
           
            {bots.map((bot)=>
            <div key={bot.id}  className="col mb-3">
             <BotCard  bot={bot} handleClick={()=>handleArmySwitch(bot.id)}/>
            </div>
           )} 

        </Container>
        </>
    )
}
export default BotCollection