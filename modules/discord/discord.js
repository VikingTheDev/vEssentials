// TODO
// - Add regular and slash commands systems (similar to events)

module.exports = () => {
    const { Client, Intents } = require("discord.js");
    const { config } = require("../../config/config.js");

    const { botToken } = config.discord;

    const eventsUsed = [
        "ready"
    ];

    const myIntents = new Intents();
    myIntents.add(Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MEMBERS);

    const client = new Client({ intents: myIntents });

    
    const init = async () => {
        for (const eventName of eventsUsed) {
            const event = require(`./events/${eventName}.js`);
            // Bind the client to any event, before the existing arguments
            // provided by the discord.js event. 
            client.on(eventName, event.bind(null, client));
        };
    
        client.login(botToken);
    };

    init();
};