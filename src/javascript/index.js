const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');
const navContainer = document.querySelector('.nav-container');

hamburgerMenu.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  hamburgerMenu.classList.toggle('open');
  navContainer.classList.toggle('open'); // Toggle the 'open' class on the nav-container
});
