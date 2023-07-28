function BotCard({bot}) {
    return (
        <div>
            <h3>{bot.name}</h3>
            <p>Class: {bot.bot_class}</p>
            <img src={bot.avatar_url} alt={bot.name}/>
        </div>
    )
}
export default BotCard