const recipes = [
  {
    title: 'Lemon Bars',
    ingredients: 'flour, sugar, butter, baking powder',
    instructions:
      'Preheat oven to 350 degrees F, Press flat and even into an 8x8 inch baking dish. Bake for 20 minutes, Beat eggs and add to mixture, stirring well. Add lemon juice and rind, mix again'
  },
  {
    title: 'Chocolate Sheet Cake',
    ingredients: 'flour, sugar, water, buttermilk, eggs',
    instructions:
      'Mix white sugar and flour in a large bowl. Combine 1 cup butter, water, and 3 tablespoons cocoa powder in a small saucepan; stir over medium heat until butter is melted and mixture is well combined. Pour melted butter mixture over sugar and flour; beat well. Beat in baking soda, buttermilk, eggs, and vanilla extract. Pour batter into prepared pan'
  }
];

function addRecipe({ title, ingredients, instructions }) {
  recipes.push({ title, ingredients, instructions });
}

const home = {
  recipes,
  addRecipe
};
module.exports = home;
