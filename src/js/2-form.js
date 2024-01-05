'use strict';
let userInfo = {};
const form = document.querySelector('form');
const localStorageKey = 'feedback-form-state';

form.addEventListener('input', e => {
  userInfo[e.target.name] = e.target.value;

  localStorage.setItem(localStorageKey, JSON.stringify(userInfo));
});

if (localStorage.getItem(localStorageKey)) {
  userInfo = JSON.parse(localStorage.getItem(localStorageKey));
  for (let key in userInfo) {
    form.elements[key].value = userInfo[key];
    console.log((form.elements[key].value = userInfo[key]));
  }
}

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(e.target.elements.message.value.trim());
  localStorage.removeItem(localStorageKey);
  form.reset();
});
