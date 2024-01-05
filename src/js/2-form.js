'use strict';
let userData = {};
const form = document.querySelector('form');
const localStorageKey = 'feedback-form-state';

form.addEventListener('input', e => {
  userData[e.target.name] = e.target.value;

  localStorage.setItem(localStorageKey, JSON.stringify(userData));
});

if (localStorage.getItem(localStorageKey)) {
  userData = JSON.parse(localStorage.getItem(localStorageKey));
  for (let key in userData) {
    form.elements[key].value = userData[key];
  }
}

form.addEventListener('submit', e => {
  if (e.target.elements.value !== '' && e.target.elements.value !== null) {
    e.preventDefault();
    console.log(e.target.elements.email.value.trim());
    console.log(e.target.elements.message.value.trim());

    localStorage.removeItem(localStorageKey);
    form.reset();
  }

  return;
});
