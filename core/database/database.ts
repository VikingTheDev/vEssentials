import { vDB } from "./API/vDB";

module.exports = async () => {
  const moduleDB = new vDB("modules.json");
  const configDB = new vDB("config.json");

  await moduleDB.read();
  await configDB.read();

  moduleDB.data ||= { modules: [] };
  moduleDB.data ||= { config: {} };

  // Do some sort of mutation of .data

  await moduleDB.write();
  await configDB.write();
};
