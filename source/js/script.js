'use strict';

const header = document.querySelector('.header__container');
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

mainNav.classList.remove('main-nav--nojs');
mainNav.classList.remove('main-nav--opened');
header.classList.remove('header__container--nojs');
mainNav.classList.add('main-nav--closed');

navToggle.addEventListener('click', function () {
  mainNav.classList.toggle('main-nav--closed');
  mainNav.classList.toggle('main-nav--opened');
  header.classList.toggle('header__container--opened');
});

// Модальное окно

const links = document.querySelectorAll('.js-modal');
const buttons = document.querySelectorAll('.js-button');
const order = document.querySelector('.order');
const success = document.querySelector('.success');
const overlay = document.querySelector('.modal-overlay');
const modalCloses = document.querySelectorAll('.modal__close');

for (var link of links) {
  link.addEventListener('click', function (evt) {
    evt.preventDefault();
    order.classList.add('order__show');
    overlay.style.display = 'block';
  });
}

for (var button of buttons) {
  button.addEventListener('click', function (evt) {
    evt.preventDefault();
    order.classList.remove('order__show');
    success.classList.add('success__show');
    overlay.style.display = 'block';
  });
}

for (var modalClose of modalCloses) {
  modalClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    order.classList.remove('order__show');
    success.classList.remove('success__show');
    overlay.style.display = '';
  });
}


window.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    if (order.classList.contains('order__show')) {
      evt.preventDefault();
      order.classList.remove('order__show');
      overlay.style.display = '';
    }
    if (success.classList.contains('success__show')) {
      evt.preventDefault();
      success.classList.remove('success__show');
      overlay.style.display = '';
    }
  }
});
