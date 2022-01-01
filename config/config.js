const config = {
    discord: {
        botToken: "ODkyMzk1MzMyNzE2MDg1MzM5.YVMR6w.zaqW6r89bGRn7HGnR7k_xQCdpDI",
        guildId: "739107232498843728"
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