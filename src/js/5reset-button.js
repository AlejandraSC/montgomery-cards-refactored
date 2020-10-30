'use strict';

const buttonReset = document.querySelector('.js-button--reset');
const profileImageCard = document.querySelector('.js__profile-image');
const url = './assets/images/lisa_simpson.png';
const smallImage = document.querySelector('.js__profile-preview');
const urlSmall = ' ';

function reset() {
  data.name = '';
  data.job = '';
  data.email = '';
  data.phone = '';
  data.linkedin = '';
  data.github = '';
  data.palette = 1;
  data.photo = '';

  for (const input of inputList) {
    input.value = '';
  }

  render();
  addClassPalettes();
  resetLocalStorage();

  const selectedPalette = document.querySelector('#design-' + data.palette);
  selectedPalette.click();

  profileImageCard.style.backgroundImage = `url(${url})`;
  smallImage.style.backgroundImage = `url(${urlSmall})`;
}

buttonReset.addEventListener('click', reset);
