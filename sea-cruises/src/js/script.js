window.addEventListener("DOMContentLoaded", function () {
  let buttonToogle = document.querySelector('.main-nav__toggle');
  let navList = document.querySelector('.menu-list');

  buttonToogle.addEventListener('click', function () {
    if (navList.classList.contains('menu-list--hidden')) {
      navList.classList.remove('menu-list--hidden');
      navList.classList.add('menu-list--block');
    } else {
      navList.classList.add('menu-list--hidden');
      navList.classList.remove('menu-list--block');
    }
  })
});
