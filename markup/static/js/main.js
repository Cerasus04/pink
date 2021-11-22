'use strict';

const burgerBtn = document.querySelector('.burger-btn');
const navList = document.querySelector('.nav-list');
const header = document.querySelector('header');

burgerBtn.addEventListener('click', function () {
    header.classList.toggle('header--open');
    navList.classList.toggle('nav-list--close');
});
