import BotCard  from "./BotCard"
function BotCollection({bots}) {
    return(
        <div>
           {bots.map((bot)=>
           <BotCard key={bot.id} bot={bot}/>
           )}
        </div>
    )
}
export default BotCollection