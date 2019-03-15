const express = require('express');
const app = express();
const PORT = 3000;

const loki = require('lokijs');

app.use(express.static('public'));

let users;

const db = new loki('example.db', {
  autoload: true,
  autoloadCallback: dbStart,
  autosave: true,
  autosaveInterval: 1000
});

app.get('/search', (req, res) => {
  const name = req.query.name;
  res.json(users.findOne({ name: name }));
});

function dbStart() {
  users = db.addCollection('users');
  users.insert({
    name: 'odin',
    age: 50,
    address: 'asgard'
  });

  //alternatively, insert array of documents
  users.insert([{ name: 'thor', age: 35 }, { name: 'Loki', age: 30 }]);
  app.listen(PORT, () => `http://localhost:${PORT}`);
}
