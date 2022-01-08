const { config } = require("./config.js");

let enabledModules = [];

// finds all enabled modules and adds them to an array.
const structureModules = () => {
    for(const module in config.modules) {
        if(config.modules[module].enable) {
            startModule(module);
            if(config.modules[module].dependencies.length > 0) {
                for(dependency of config.modules[module].dependencies) {
                    if(enabledModules.find(element => element === dependency) === undefined) {
                        startModule(dependency);
                    };
                };
            };
        };
    };
};

const startModule = (module) => {
    try {
        const func = require(`./modules/${module}/${module}.js`);
        if(typeof func === Function) func();
        func();
        // if(config.modules[module].client_scripts.length > 0) {
        //     for(script of config.modules[module].client_scripts) {
        //         let x = RegisterResourceAsset("vEssentials", script);
        //         console.log(x);
        //     };
        // };
        enabledModules.push(module);
        console.log(`[ModuleStarter] | ${module} has successfully started... ✅`);
    } catch (err) {
        console.log(`[ModuleStarter] | ${module} could not be started... ❌ \n${err}`);
    };
};

structureModules();