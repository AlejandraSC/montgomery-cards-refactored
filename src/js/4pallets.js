'use strict';

const designCard = document.querySelector('.section__article');
const design1 = document.querySelector('.js-design-1');
const design2 = document.querySelector('.js-design-2');
const design3 = document.querySelector('.js-design-3');

function changeDesign(event) {
  if (event.currentTarget.value === 'design-1') {
    data.palette = 1;
  }
  if (event.currentTarget.value === 'design-2') {
    data.palette = 2;
  }
  if (event.currentTarget.value === 'design-3') {
    data.palette = 3;
  }
  addClassPalettes();
  setLocalStorage();
}

function addClassPalettes() {
  designCard.classList.remove('palets-1');
  designCard.classList.remove('palets-2');
  designCard.classList.remove('palets-3');
  if (data.palette === 1) {
    designCard.classList.add('palets-1');
  }
  if (data.palette === 2) {
    designCard.classList.add('palets-2');
  }
  if (data.palette === 3) {
    designCard.classList.add('palets-3');
  }
}

design1.addEventListener('click', changeDesign);
design2.addEventListener('click', changeDesign);
design3.addEventListener('click', changeDesign);
