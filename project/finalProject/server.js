const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.static('./public'));

app.get('./dynamic', (req, res) => {
  res.send('Test');
});

app.listen(PORT, () => `Listening on http://localhost:${PORT}`);
