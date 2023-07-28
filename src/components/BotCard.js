function BotCard({bot}) {
    return (
        <div>
            <img src={bot.avatar_url} alt={bot.name}/>
            <h3>{bot.name}</h3>
            <p>Class: {bot.bot_class}</p>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <p>Catchphrase: {bot.catchphrase}</p>
            <p>Created at: {bot.created_at}</p>
            <p>Updated at: {bot.updated_at}</p>
        </div>
    )
}
export default BotCard