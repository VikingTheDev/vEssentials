const jsonfile = require("jsonfile");
// Super simple local database solution, will most likely add the option
// of using a redis database instead. Depends what the database will be
// used for in the future.
class vDB {
  constructor(filename) {
    this.file = __dirname.replace("API", `localStorage/${filename}`);
  }

  async write() {
    jsonfile.writeFile(this.file, this.data, { spaces: 1 }, (err) => {
      if (err) console.log(err);
    });
  }

  async read() {
    jsonfile.readFile(this.file, (err, obj) => {
      if (err) console.error(err);
      this.data = obj;
    });
  }
}

module.exports = {
  vDB: vDB,
};
