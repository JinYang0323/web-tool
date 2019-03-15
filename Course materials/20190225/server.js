const express = require('express');
const app = express();
const PORT = 3000;

const people = require('./people.js');

app.use(express.static('./public'));

app.get('/people/', (req, res) => {
  res.send();
});

app.post('/people/', express.json(), (req, res) => {
  const name = req.body.name;
  if (!name) {
    res.status(400).json({ error: "'name' property required" });
  } else if (people[name]) {
    res.status(409).json({ error: `already exists: ${name}` });
  } else {
    people[name] = req.body;
    res.sendStatus(200);
  }
});

updateData('/people', {});

function updateData() {
  return fetch('/people', {
    method: 'POST',
    headers: new Headers({ 'content-type': 'applcation/json' }),
    body: JSON.stringify({ name: 'whatever', age: 100 })
  });
}

app.listen(PORT, () => console.log(`listning on http://localhost:${port}`));
