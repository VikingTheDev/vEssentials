const { config } = require("../../../config.js");
let { guildId } = config.discord;

module.exports = async (client, userId, altGuildId, cb) => {
    guildId = altGuildId ? altGuildId : guildId;
    const guild = client.guilds.cache.get(guildId);

    if(!guild.bans.cache.get()) await guild.bans.fetch();

    let bool;

    guild.bans.cache.some(ban => {
        if(ban.user.id === userId) {
            let reason = ban.reason ? ban.reason : "No reason specified."
            cb(true, reason); bool = true; return true; // Make a callback, and break out of the loop
        } else return false;
    });

    if (!bool) cb(false);
};