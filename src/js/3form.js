/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
'use strict';

const inputList = document.querySelectorAll('.js-input');

let data = {
  name: '',
  job: '',
  email: '',
  phone: '',
  linkedin: '',
  github: '',
  palette: 1,
  photo: '',
};

const saveField = function (event) {
  data[event.currentTarget.name] = event.currentTarget.value;
  render();
  setLocalStorage();
};

for (const input of inputList) {
  input.addEventListener('keyup', saveField);
}

const render = function () {
  document.querySelector('.js-cardName').innerHTML =
    data.name || 'Lisa Simpson';
  document.querySelector('.js-cardPosition').innerHTML =
    data.job || 'Saxophonist';
  document.querySelector('.js-cardEmail').href = 'mailto:' + data.email;
  document.querySelector('.js-cardPhone').href = 'tel:' + data.phone;
  document.querySelector('.js-cardLinkedin').href =
    'https://www.linkedin.com/in/' + data.linkedin;
  document.querySelector('.js-cardGithub').href =
    'https://www.github.com/' + data.github;
};
