// js/main.js

const toggle = document.getElementById('theme-toggle');
const body = document.body;

toggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  toggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

const burger = document.getElementById('burger-menu');
const nav = document.querySelector('nav');

burger.addEventListener('click', () => {
  nav.classList.toggle('show');
});

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('show');
  });
});

// Fermer le menu si on clique en dehors
document.addEventListener('click', (e) => {
  const isClickInsideMenu = nav.contains(e.target);
  const isClickOnBurger = burger.contains(e.target);

  if (!isClickInsideMenu && !isClickOnBurger) {
    nav.classList.remove('show');
  }
});