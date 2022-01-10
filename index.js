const { config } = require("./config.js");
const { readdirSync } = require("fs");
const path = require("path");

const __dirname = path.resolve() + "/resources/[local]/vEssentials";

// Start all core modules (aka required modules)
const init = () => {
    const coreModules = readdirSync(`${__dirname}/core/`);

    coreModules.forEach(module => {
        try {
            const func = require(`./core/${module}/${module}.js`);
            func();
            console.log(`[Core] | ${module} has successfully started... ✅`);
        } catch (err) {
            console.log(`[Core] | ${module} could not be started... ❌ \n${err}`);
        };
    });
};

init();