const recipeWeb = {
  pageWrap: function(content) {
    return `<!DOCTYPE html>
    <html>
      <head>
        <link rel="stylesheet" href="/recipe.css"/>
        <title>Recipe</title>
      </head>
      <body>
        <div id="recipe-app">
            ${content}  
        </div>
        <script src="/recipe.js"></script>   
      </body>
    </html>`;
  },

  homePage: function(recipe) {
    return this.pageWrap(`
      ${this.getRecipeList(recipe)}
    <div class="add">
        <form action="/add" method="POST">
            <button type=""submit">New Recipe</button>
        </form>
    </div>   `);
  },

  detailPage: function(recipe) {
    return this.pageWrap(`
        <div class="detail-title">${recipe.title}</div>
        <div class="detail-ingredients">${recipe.ingredients}</div>
        <div class="detail-instructions">${recipe.instructions}</div>
        <a href="/">Return to Home</a>
    `);
  },

  addPage: function() {
    return this.pageWrap(`
    <div class="add">
        <form action="/add" method="POST">
            <input name="title" class="title" placeHolder="title">       <input name="ingredients" class="ingredients" placeHolder="ingredients">
            <input name="instructions" class="instructions" placeHolder="instructions">
            <button type="submit">+</button>
        </form>
        <a href="/">Return to Home</a>
    </div>
    `);
  },

  formatRecipe: function(recipe) {
    return `<li>
        <div class="recipe">
            <form method="GET" action="/detail">
                <button type="submit">${recipe.title}</button>
            </form>
        </div>
      </li>`;
  },

  getRecipeList: function(recipe) {
    return `<ul class="recipes">
      ${Object.values(recipe.recipes)
        .map(this.formatRecipe)
        .join('')}
  </div>`;
  }
};

module.exports = recipeWeb;
