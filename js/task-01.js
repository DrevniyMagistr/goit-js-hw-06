const categoryEl = document.querySelector('#categories');

const numberOfElCategory = categoryEl.querySelectorAll('.item');

console.log(`Number of categories: ${numberOfElCategory.length}`);

numberOfElCategory.forEach((el) => {
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.lastElementChild.children.length}`);
});
