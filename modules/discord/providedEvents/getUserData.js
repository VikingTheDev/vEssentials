const { config } = require("../../../config/config.js");
const { guildId } = config.discord;

module.exports = async (client, userId, cb) => {
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