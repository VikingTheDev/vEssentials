const { config } = require("../../../config.js");
let { guildId } = config.discord;

module.exports = async (client, userId, altGuildId, cb) => {
    guildId = altGuildId ? altGuildId : guildId;
    const guild = client.guilds.cache.get(guildId);
    
    // Check if the user's guild info is cached, if not fetch it.
    if(!guild.members.cache.get(userId)) await guild.members.fetch(userId);

    const member = guild.members.cache.get(userId);

    const {displayName} = member;
    const {tag} = member.user;
    const roles = member.roles.cache.map( r => {
        if(r.guild.id === guildId) {
            return {name: r.name, id: r.id};
        };
    });

    cb(displayName, tag, roles);
};