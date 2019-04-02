const express = require('express');
const app = express();
const PORT = 3000;

const recipe = require('./recipe');
const recipeWeb = require('./recipe-web');

app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.send(recipeWeb.homePage(recipe));
});

app.get('/add', (req, res) => {
  res.send(recipeWeb.addPage());
});

app.get('/detail', (req, res) => {
  const title = req.query.title;
  const recipe = recipe.recipes[title];
  console.log('title: ' + title);
  console.log(recipe.recipes);
  if (recipe) {
    res.send(recipeWeb.detailPage(recipe));
  }
});

app.post('/detail', express.urlencoded({ extended: false }), (req, res) => {
  const { title } = req.query;
  res.redirect('/detail');
});

app.post('/add', express.urlencoded({ extended: false }), (req, res) => {
  const { title, ingredients, instructions } = req.body;
  if (title && ingredients && instructions) {
    recipe.addRecipe({ title, ingredients, instructions });
    res.redirect(`/detail?title=${title}`);
  } else {
    res.redirect('/add');
  }
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
