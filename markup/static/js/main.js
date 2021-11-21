'use strict';

const burgerBtn = document.querySelector('.burger-btn');
const navList = document.querySelector('.nav-list')
const headerNav = document.querySelector('header__nav');

burgerBtn.addEventListener('click', function () {
    if (navList.classList.contains('nav-list--close')) {

        burgerBtn.classList.remove('burger-btn--close');
        burgerBtn.classList.add('burger-btn--open');
        navList.classList.remove('nav-list--close');
        navList.classList.add('nav-list--open');
    } else {

        navList.classList.remove('nav__list--open');
        navList.classList.remove('nav-list--open');
        burgerBtn.classList.remove('burger-btn--open');
        burgerBtn.classList.add('burger-btn--close');
    }
});
