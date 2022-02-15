'use strict';

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
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
  console.log(`movetoScroll target: ${target}`);
  const link = target.dataset.link;
  console.log(`movetoScroll link: ${link}`);
  const scrollTo = document.querySelector(link);
  if (link == null) {
    return;
  }

  scrollTo.scrollIntoView({
    behavior: "smooth"
  });

}

//Make home opacity when scroll
const homeContainer = document.querySelector('.home__container');
document.addEventListener('scroll', () => {
  const opacityValue = 1 / (window.scrollY / 200);
  console.log(opacityValue);
  homeContainer.style.opacity = opacityValue;

  console.log(window.scrollY);
  // if (window.scrollY > navbarHeight) {

  // }
});


// Show "arrow up" button when scrolling down
const arrowUpBtn = document.querySelector('.arrowup');
arrowUpBtn.addEventListener('click', (event) => movetoScroll(event));
document.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    arrowUpBtn.classList.add('visible');
  } else {
    arrowUpBtn.classList.remove('visible');
  }
});

//Handle scrolling when tapping on the nav logo
const navLogo = document.querySelector('.navbar__logo');
navLogo.addEventListener('click', (event) => movetoScroll(event));