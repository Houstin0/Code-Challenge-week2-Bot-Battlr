import React from 'react';
import { Button, Card } from 'react-bootstrap';

function BotSpecs ({ bot, army, handleEnlist, handleBackClick }){
  const isEnlisted = army.includes(bot.id);

  function handleEnlistClick (){
    handleEnlist(bot.id);
  };

  return (
    <>
      <Card key={bot.id} style={{ maxWidth: '30rem' }} className="my-3">
      <Card.Img variant="top" src={bot.avatar_url}alt={bot.name}/>
            <Card.Body>
             <Card.Title>{bot.name}</Card.Title>
             <Card.Subtitle>Class: {bot.bot_class}</Card.Subtitle>
             <Card.Text>Health: <i className="bi bi-heart-pulse-fill"/> : {bot.health}</Card.Text>
             <Card.Text> Damage: <i className="bi bi-heartbreak"/> : {bot.damage}</Card.Text>
             <Card.Text>Armor: <i className="bi bi-shield-shaded"/> : {bot.armor}</Card.Text>
             <Card.Text>Catchphrase: {bot.catchphrase}</Card.Text>
             <Card.Text>Created at: {bot.created_at}</Card.Text>
             <Card.Text>Updated at: {bot.updated_at}</Card.Text>
            </Card.Body>
        <Card.Footer>
          {isEnlisted ? (
            <Button variant="danger" onClick={handleEnlistClick}>
              Remove from Army
            </Button>
          ) : (
            <Button variant="primary" onClick={handleEnlistClick}>
              Enlist
            </Button>
          )}
          <Button variant="outline-primary" onClick={handleBackClick}>
             Back to List View
           </Button>
        </Card.Footer>
      </Card>
    </>
  );
};

export default BotSpecs;
