let counterValue = 0;

const counter = document.querySelector('#value');
const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);

const decreaseValue = () => {
  counter.textContent = counterValue -= 1;
};

const increaseValue = () => {
  counter.textContent = counterValue += 1;
};

decrementButton.addEventListener('click', decreaseValue);
incrementButton.addEventListener('click', increaseValue);
