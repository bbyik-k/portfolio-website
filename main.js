'use strict';

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  console.log(window.scrollY);
  console.log(navbarHeight);
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

//Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => movetoScroll(event));

//Handle scrolling when tapping on the Contact me btn
const contactBtn = document.querySelector('.home__contact');
contactBtn.addEventListener('click', (event) => movetoScroll(event));

// movetoScroll func
function movetoScroll(event) {
  const target = event.target;
  const link = target.dataset.link;
  const scrollTo = document.querySelector(link);
  if (link == null) {
    return;
  }
  console.log(scrollTo);
  scrollTo.scrollIntoView({
    behavior: "smooth"
  });
}