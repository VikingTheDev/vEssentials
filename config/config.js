const config = {
    discord: {
        botToken: "Changeme",
        guildId: "Changeme"
    },
    modules: {
        discord: {
            enable: true,
            client_scripts: [
                "./modules/discord/client/client.js"
            ],
            dependencies: [
                
            ]
        },
        logger: {
            enable: true,
            client_scripts: [
            ],
            dependencies: [
                
            ]
        }
    }
};

module.exports = {
    config
};