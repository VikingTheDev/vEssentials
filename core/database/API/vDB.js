const jsonfile = require("jsonfile");

class vDB {
    constructor(filename) {
        this.file = __dirname.replace("API", `localStorage/${filename}`);
    };

    async write() {
        jsonfile.writeFile(this.file, this.data, { spaces: 1 }, (err) => {
            if (err) console.log(err);
        });
    };

    async read() {
        jsonfile.readFile(this.file, (err, obj) => {
            if (err) console.error(err);
            this.data = obj;
        });
    };
}

module.exports = {
    vDB: vDB
};