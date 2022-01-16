const inputSwiper = document.querySelector('#font-size-control');
const sizeText = document.querySelector('#text');

inputSwiper.addEventListener(
  'input',
  (e) => (sizeText.style.fontSize = `${e.currentTarget.value}px`)
);
