import React from "react"
import BotCard  from "./BotCard"
import { Container,Card } from "react-bootstrap"
function BotCollection({bots,handleBotClick}) {
    return(
        <>
        <h2>Bot Collection</h2>
        <Container className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center">
            {bots.map((bot)=>
            <Card key={bot.id} style={{ maxWidth: '13rem' }} >
             <BotCard  bot={bot} handleClick={()=>handleBotClick(bot.id)}/>
            </Card>
           )} 
        </Container>
        </>
    )
}
export default BotCollection