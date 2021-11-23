'use strict';

const burgerBtn = document.querySelector('.burger-btn');
const navList = document.querySelector('.nav-list');
const header = document.querySelector('header');

burgerBtn.addEventListener('click', function () {
    header.classList.toggle('header--open');
    navList.classList.toggle('nav-list--close');
    if (header.classList.contains('header--open')) {
        burgerBtn.classList.remove('burger-btn--close');
        burgerBtn.classList.add('burger-btn--open');
    } else {
        burgerBtn.classList.remove('burger-btn--open');
        burgerBtn.classList.add('burger-btn--close');
    }
});
