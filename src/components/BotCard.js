import React from "react"
import { Card} from "react-bootstrap"

function BotCard({bot,handleClick}) {
    function handleButtonClick (){
        handleClick(bot.id)
    }
    return (
        <Card className="mb-3" onClick={handleButtonClick}>
            <Card.Img variant="top" src={bot.avatar_url}alt={bot.name}/>
            <Card.Body>
             <Card.Title>{bot.name}</Card.Title>
             <Card.Subtitle>Class: {bot.bot_class}</Card.Subtitle>
             <Card.Text>Health <i className="bi bi-heart-pulse-fill"/> : {bot.health}</Card.Text>
             <Card.Text> Damage <i className="bi bi-heartbreak"/> : {bot.damage}</Card.Text>
             <Card.Text>Armor <i className="bi bi-shield-shaded"/> : {bot.armor}</Card.Text>
            </Card.Body>
          
        </Card>
    )
}
export default BotCard