const input = document.querySelector('#validation-input');
const valueLength = Number(input.dataset.length);

const makeBorderColor = input.addEventListener('blur', (e) =>
  e.currentTarget.value.length !== valueLength
    ? input.setAttribute('class', 'invalid')
    : input.setAttribute('class', 'valid')
);
