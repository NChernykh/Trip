'use strict';
var header = document.querySelector('.header__container');
var navToggle = document.querySelector('.nav-toggle');
var mainNav = document.querySelector('.main-nav');

mainNav.classList.remove('main-nav--nojs');
mainNav.classList.remove('main-nav--opened');
mainNav.classList.add('main-nav--closed');

navToggle.addEventListener('click', function () {
  mainNav.classList.toggle('main-nav--closed');
  mainNav.classList.toggle('main-nav--opened');
  header.classList.toggle('header__container--opened');
});
