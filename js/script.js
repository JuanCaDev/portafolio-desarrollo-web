const ipad = window.matchMedia('screen and (max-width: 480px)');
const menu = document.querySelector('.menu');
const burgerButton = document.querySelector('#burger-button');

ipad.addListener(validation);

burgerButton.addEventListener('click', hideShow);

function validation(event) {
  if (event.matches) {
    burgerButton.addEventListener('click', hideShow);
  } else {
    burgerButton.removeEventListener('click', hideShow);
  }
}

function hideShow() {
  if (menu.classList.contains('is-active')) {
    menu.classList.remove('is-active');
  } else {
    menu.classList.add('is-active');
  }
}