'use strict';

function setLocalStorage() {
  localStorage.setItem('data', JSON.stringify(data));
}

function getFromLocalStorage() {
  const savedData = JSON.parse(localStorage.getItem('data'));
  if (savedData !== null) {
    data = savedData;
    document.querySelector('.js-inputName').value = data.name;
    document.querySelector('.js-inputPosition').value = data.job;
    document.querySelector('.js-inputEmail').value = data.email;
    document.querySelector('.js-inputPhone').value = data.phone;
    document.querySelector('.js-inputLinkedin').value = data.linkedin;
    document.querySelector('.js-inputGithub').value = data.github;

    const selectedPalette = document.querySelector('#design-' + data.palette);
    selectedPalette.click();

    if (data.photo !== '') {
      profileImageCard.style.backgroundImage = `url(${data.photo})`;
      smallImage.style.backgroundImage = `url(${data.photo})`;
    }

    render();
    addClassPalettes();
  }
}

getFromLocalStorage();

function resetLocalStorage() {
  localStorage.removeItem('data');
}
