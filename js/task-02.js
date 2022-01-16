const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

// const itemsEl = ingredients.map((ingredient) => {
//   const itemEl = document.createElement('li');

//   itemEl.textContent = ingredient;
//   listEl.appendChild(itemEl);
//   itemEl.classList.add('item');

//   return itemEl;
// });

// listEl.append(...itemsEl);

const makeItemsEl = ingredients => {
  return ingredients.map((ingredient) => {
    const itemEl = document.createElement('li');

    itemEl.textContent = ingredient;
    listEl.appendChild(itemEl);
    itemEl.classList.add('item');

    return itemEl;
  });

};
const itemsEl = makeItemsEl(ingredients);
listEl.append(...itemsEl);