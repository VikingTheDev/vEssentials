const { Client, Intents } = require("discord.js");
const { readdirSync } = require("fs");
const { config } = require("../../config.js");

module.exports = () => {
  const { botToken, guildId } = config.discord;

  const myIntents = new Intents();
  myIntents.add(
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_BANS
  );

  const client = new Client({ intents: myIntents });

  const init = async () => {
    // Initilize the discord event listeners.
    const events = await readdirSync(`${__dirname}/events/`).filter((file) =>
      file.endsWith(".js")
    );
    for (const file of events) {
      const event = require(`./events/${file}`);
      const eventName = file.replace(".js", "");
      // Bind the client to any event, before the existing arguments
      // provided by the discord.js event.
      client.on(eventName, event.bind(null, client));
    }

    // Initilize the server event listeners.
    const providedEvents = await readdirSync(
      `${__dirname}/providedEvents/`
    ).filter((file) => file.endsWith(".js"));
    for (const file of providedEvents) {
      const event = require(`./providedEvents/${file}`);
      const eventName = file.replace(".js", "");
      // Bind the client to the cfx events provided.
      onNet(`vEssentials/discord:${eventName}`, event.bind(null, client));
    }

    try {
      client.login(botToken);
    } catch (err) {
      console.log(err.message);
    }
  };

  init();
};
