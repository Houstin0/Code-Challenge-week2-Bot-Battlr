import React from "react"
import { Card,Button } from "react-bootstrap"

function BotCard({bot,buttonText,handleClick}) {
    function handleButtonClick (){
        handleClick(bot.id)
    }
    return (
        <Card className="mb-3">
            <Card.Img variant="top" src={bot.avatar_url}alt={bot.name}/>
            <Card.Body>
            <Card.Title className="card-title">{bot.name}</Card.Title>
            <Card.Text>Class: {bot.bot_class}</Card.Text>
            <Card.Text>Health: <i class="bi bi-heart-pulse-fill"></i>{bot.health}</Card.Text>
            <Card.Text> Damage: <i class="bi bi-heartbreak"></i>{bot.damage}</Card.Text>
            <Card.Text>Armor: <i class="bi bi-shield-shaded"></i> {bot.armor}</Card.Text>
            <Card.Text>Catchphrase: {bot.catchphrase}</Card.Text>
            <Card.Text>Created at: {bot.created_at}</Card.Text>
            <Card.Text>Updated at: {bot.updated_at}</Card.Text>
            <Button variant="primary" onClick={handleButtonClick}>{buttonText}</Button>
            </Card.Body>
          
        </Card>
    )
}
export default BotCard