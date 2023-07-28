import BotCard  from "./BotCard"
function BotCollection({bots,enlistBot}) {
    return(
        <div>
            <h2>Bot Collection</h2>
           {bots.map((bot)=>
           <BotCard key={bot.id} bot={bot} handleClick={()=>enlistBot(bot.id)} buttonText="Enlist"/>
           )}
        </div>
    )
}
export default BotCollection