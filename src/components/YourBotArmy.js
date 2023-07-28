import BotCard from "./BotCard"

function YourBotArmy({bots,army}) {
    const armyBots=bots.filter((bot)=> army.includes(bot.id))

    return(
        <div>
            <h2>Your Bot Army</h2>
            {armyBots.map((bot)=>
                <BotCard key={bot.id}bot={bot} handleClick={()=>{}} bottonText="Relaese"/>
            )}
        </div>
    )
}
export default YourBotArmy