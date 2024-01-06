'use strict';
let userData = {};
const form = document.querySelector('form');
const localStorageKey = 'feedback-form-state';

form.addEventListener('input', e => {
  if (e.target.value !== '' && e.target.value !== null) {
    userData[e.target.name] = e.target.value.trim();
    localStorage.setItem(localStorageKey, JSON.stringify(userData));
  }
  return;
});

if (localStorage.getItem(localStorageKey)) {
  userData = JSON.parse(localStorage.getItem(localStorageKey));

  form.elements.message.value = userData.message;
  form.elements.email.value = userData.email;
}

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(e.target.elements.email.value);
  console.log(e.target.elements.message.value);

  localStorage.removeItem(localStorageKey);
  form.reset();
});
