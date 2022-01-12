const { config } = require("./config.js");
const { readdirSync } = require("fs");

// Start all core modules (aka required modules)
const init = () => {
  const coreModules = readdirSync(
    `${GetResourcePath(GetCurrentResourceName())}/core/`
  );

  coreModules.forEach((module) => {
    try {
      const func = require(`./core/${module}/${module}.js`);
      func();
      console.log(`[Core] | ${module} has successfully started... ✅`);
    } catch (err) {
      console.log(`[Core] | ${module} could not be started... ❌ \n${err}`);
    }
  });
};

init();

const { exec } = require('child_process');

exec(`${GetResourcePath(GetCurrentResourceName())}/start-web.bat`, (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
});