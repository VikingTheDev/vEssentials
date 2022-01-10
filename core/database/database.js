const express = require('express');
const { vDB } = require('./API/vDB.js');

module.exports = async () => {
    //const app = express();
    //app.use(express.json());

    const moduleDB = new vDB('modules.json');
    await moduleDB.read();

    moduleDB.data ||= { modules: [] };

    await moduleDB.write();

    // const adapter = new JSONFileSync('./localStorage/db.json');
    // const db = new LowSync(adapter);
    // await db.read();
    // db.data ||= { initilized: false, modules: [], discord: {}, perms: {} };

    // db.write();
};

// const { posts } = db.data;

// app.get('/posts/:id', async (req, res) => {
//   const post = posts.find((p) => p.id === req.params.id)
//   res.send(post)
// })

// app.post('/posts', async (req, res, next) => {
//   const post = posts.push(req.body)
//   await db.write()
//   res.send(post)
// })

// app.listen(3000, () => {
//   console.log('listening on port 3000')
// })