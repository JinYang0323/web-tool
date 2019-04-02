'use strict';

const recipe = {};

(function IIFE() {
  const recipeArray = Array.from(document.querySelectorAll('.recipe'));
  for (let recipe of recipeArray) {
    recipe.addEventListener('click', e => {
      console.log(recipe.innerHTML);
    });
  }
})();

function changeColor(recipe) {
  recipe.classList.toggle('selected');
}
