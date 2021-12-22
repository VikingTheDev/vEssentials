const { modules } = require("../config/modules.js");

// finds all enabled modules and adds them to an array.
const structureModules = () => {
    let enabledModules = [];
    for(const module in modules) {
        if(modules[module].enable) {
            enabledModules.push(module);
            if(modules[module].dependencies.length > 0) {
                for(dependency of modules[module].dependencies) {
                    if(enabledModules.find(element => element === dependency) === undefined) {
                        enabledModules.push(dependency);
                    };
                };
            };
        };
    };
    return(enabledModules);
};

// starts all enabled modules
const startModules = (modules) => {
    for(module of modules) {
        try {
            const func = require(`./optional/${module}.js`);
            func();
            console.log(`[moduleStarter] | ${module} has successfully started... ✅`);
        } catch (err) {
            console.log(`[moduleStarter] | ${module} could not be started... ❌ \n${err}`);
        };
    };
};

module.exports = function () {
    startModules(structureModules());
};