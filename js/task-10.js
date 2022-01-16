function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create');
const btnDestroy = document.querySelector('button[data-destroy');
const boxes = document.querySelector('#boxes');