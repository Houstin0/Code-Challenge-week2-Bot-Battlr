import BotCard from "./BotCard"
function BotCollection({bots}) {
    return(
        <div>
            {BroadcastChannel.map((bot)=>{
                <BotCard bot={bot}/>
            })}
        </div>
    )
}
export default BotCollection