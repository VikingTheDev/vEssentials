// TODO
// - Add regular and slash commands systems

module.exports = () => {
    const { Client, Intents } = require("discord.js");
    const { config } = require("../../config.js");

    const { botToken, guildId } = config.discord;

    const eventsUsed = [
        "ready"
    ], eventsProvided = [
        "getUserData", 
        "checkGuildBans"
    ];

    //const guild = client.guilds.cache.get(guildId);

    const myIntents = new Intents();
    myIntents.add(Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_BANS);

    const client = new Client({ intents: myIntents });

    const init = async () => {
        // Initilize the discord event listeners.
        for (const eventName of eventsUsed) {
            const event = require(`./events/${eventName}.js`);
            // Bind the client to any event, before the existing arguments
            // provided by the discord.js event. 
            client.on(eventName, event.bind(null, client));
        };

        // Initilize the server event listeners.
        for (const eventName of eventsProvided) {
            const event = require(`./providedEvents/${eventName}.js`);
            // Bind the client to the cfx events provided.
            onNet(`vEssentials/discord:${eventName}`, event.bind(null, client));
        };
    
        client.login(botToken);
    };

    init();
};