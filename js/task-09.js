function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonRef = document.querySelector('.change-color');
const hexNameColor = document.querySelector('.color');
const bodyColor = document.querySelector('body');

const onBtnClickChangeColor = () => {
  hexNameColor.textContent = getRandomHexColor();
  bodyColor.style.background = hexNameColor.textContent;
}

buttonRef.addEventListener('click', onBtnClickChangeColor);
