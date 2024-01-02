'use strict';

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

form.elements.message.value = localStorage.getItem(localStorageKey) ?? '';
form.elements.email.value = localStorage.getItem(localStorageKey) ?? '';

form.addEventListener('input', e => {
  const userInfo = {
    email: document.querySelector('input').value,
    message: document.querySelector('textarea').value,
  };

  localStorage.setItem(localStorageKey, JSON.stringify(userInfo));
  userInfo = JSON.parse(localStorageKey);
  console.log(localStorage.getItem(userInfo));
});

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(e.target.elements.message.value.trim());
  form.reset();
});
