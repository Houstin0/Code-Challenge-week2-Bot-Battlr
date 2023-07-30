import React from "react"

import { Button,Card, Container } from "react-bootstrap"

function YourBotArmy({bots,army,handleDischarge}) {
    const armyBots=bots.filter((bot)=> army.includes(bot.id))
    const handleBotClick=(botId)=>{
        handleDischarge(botId)
    }
    return(
        <>
            <h2>Your Bot Army</h2>
            <Container className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {armyBots.map((bot)=>
              <Card key={bot.id} onClick={()=> handleBotClick(bot.id)}>
        
                  <Card.Img variant="top" src={bot.avatar_url}alt={bot.name}/>
                  <Card.Body>
                  <Card.Title>{bot.name}</Card.Title>
                  <Card.Subtitle>Class: {bot.bot_class}</Card.Subtitle>
                  <Card.Text>Health: <i className="bi bi-heart-pulse-fill"></i>{bot.health}</Card.Text>
                  <Card.Text> Damage: <i className="bi bi-heartbreak"></i>{bot.damage}</Card.Text>
                  <Card.Text>Armor: <i className="bi bi-shield-shaded"></i> {bot.armor}</Card.Text>
                  <Button 
                  variant="danger" 
                >
                  X
                  </Button>
                  </Card.Body>
              </Card>
            )}

            </Container>
            
        </>
    )
}
export default YourBotArmy