const hamburgerEl = document.querySelector('.burger');
const XIconEl = document.querySelector('.XIcon');
const mainNavListEl = document.querySelector('.main-nav__list');

document.querySelector('.card__title').style.backgroundClip = 'text';

const toggleNav = () => {
  hamburgerEl.addEventListener('click', () => {
    mainNavListEl.classList.add('show');
  });

  XIconEl.addEventListener('click', () => {
    mainNavListEl.classList.remove('show');
  });
};

toggleNav();