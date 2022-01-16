const formRef = document.querySelector('.login-form');

const onFormSubmit = (e) => {
  e.preventDefault();

  const email = e.currentTarget.elements.email.value;
  const password = e.currentTarget.elements.password.value;

  email && password !== ''
    ? formRef.reset()
    : alert('Все поля должны быть заполнены!!!');
  console.log(`email: ${email}, password: ${password}`);
};

formRef.addEventListener('submit', onFormSubmit);
