const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('[name="email"]');
const messageInput = form.querySelector('[name="message"]');

const updateLocalStorage = () => {
  const currentState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(currentState));
};

const fillFormFields = () => {
  const savedState = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
  emailInput.value = savedState.email || '';
  messageInput.value = savedState.message || '';
};

emailInput.addEventListener('input', updateLocalStorage);
messageInput.addEventListener('input', updateLocalStorage);

window.addEventListener('load', fillFormFields);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const currentState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(currentState);
  clearFormAndLocalStorage();
});
