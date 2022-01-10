import * as jsonfile from "jsonfile";

export interface vDB {
    file: String;
    data: configData | moduleData;
};

interface configData {

};

interface moduleObj {
    name: String;
    enabled: Boolean;
    dependencies: Array<String>;
};

interface moduleData {
    modules: Array<moduleObj>;
};

export class vDB {
    constructor(filename: string) {
        this.file = __dirname.replace("API", `localStorage/${filename}`);
    };

    async write(): Promise<void> {
        jsonfile.writeFile(this.file, this.data, { spaces: 1 }, ({ message }) => {
            if (message) console.log(message);
        });
    };

    async read(): Promise<void> {
        jsonfile.readFile(this.file, (err, obj) => {
            if (err) console.error(err);
            this.data = obj;
        });
    };
}

