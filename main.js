'use strict';

//Set initialize
function init() {
  changeNavColor();
}

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => changeNavColor());


function changeNavColor() {
  navbarMenu.classList.remove('open');
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
}

//Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => movetoScroll(event));

//Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  console.log(`click!`)
  navbarMenu.classList.toggle('open');
});

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
  homeContainer.style.opacity = opacityValue;
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

// Projects
const workBtnContainer = document.querySelector('.work_categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }
  const active = document.querySelector('.category__btn.active');
  active.classList.remove('active');
  const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
  target.classList.add('active');


  projectContainer.classList.add('anim-out');
  setTimeout(_ => {
    projects.forEach((project) => {
      if (filter === "*" || filter === project.dataset.type) {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('anim-out');
  }, 300);

});

//Handle scrolling when tapping on the nav logo
const navLogo = document.querySelector('.navbar__logo');
navLogo.addEventListener('click', (event) => movetoScroll(event));