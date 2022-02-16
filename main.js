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
  navbar.classList.remove('open');
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
}

//Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  movetoScroll(event);
  selectNavItem(event.target);
});

//Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
  navbar.classList.toggle('open');
});

//Handle scrolling when tapping on the Contact me btn
const contactBtn = document.querySelector('.home__contact');
contactBtn.addEventListener('click', (event) => {
  movetoScroll(event);
  selectNavItem(navItems[sectionIds.indexOf(event.target.dataset.link)]);
});

// movetoScroll func
function movetoScroll(event) {
  const target = event.target;
  const link = target.dataset.link;

  if (link == null) {
    return;
  }
  const index = sectionIds.indexOf(link);
  selectedNavIndex = index;
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({
    behavior: "smooth"
  });
}

init();

//Make home opacity when scroll
const homeContainer = document.querySelector('.home__container');
document.addEventListener('scroll', () => {
  const opacityValue = 1 / (window.scrollY / 200);
  homeContainer.style.opacity = opacityValue;
});


// Show "arrow up" button when scrolling down
const arrowUpBtn = document.querySelector('.arrowup');
arrowUpBtn.addEventListener('click', (event) => {
  movetoScroll(event);
  selectNavItem(navItems[sectionIds.indexOf(event.target.dataset.link)]);
});

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
navLogo.addEventListener('click', (event) => {
  movetoScroll(event);
  selectNavItem(navItems[sectionIds.indexOf(event.target.dataset.link)]);
});

//Intersection observer

const sectionIds = ['#home', '#about', '#skills', '#work', '#testimonials', '#contact'];
const setctions = sectionIds.map(id => document.querySelector(id));
const navItems = sectionIds.map(id => document.querySelector(`.navbar__menu [data-link="${id}"]`));


let selectedNavIndex = 0;
let selectedNavItem = navItems[0];

function selectNavItem(selected) {
  console.debug(`selectedNavItem: ${selectedNavItem}`);
  console.debug(selectedNavItem);
  console.debug(`selected: ${selected}`);
  console.debug(selected);

  if (selectedNavItem) {
    selectedNavItem.classList.remove('active');
  }

  selectedNavItem = selected;
  selectedNavItem.classList.add('active');
}

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.8
}

//isIntersecting: 관찰 대상이 루트 요소와 교차 상태로 들어가거나(true) 교차 상태에서 나가는지(false) 여부를 나타내는 값(Boolean)입니다.
//intersectionRatio: 관찰 대상이 루트와 얼마나 겹치나 0.0~1.0
// boundingClientRect: 관찰 대상의 사각형 정보(DOMRectReadOnly)

const observerCallback = (entries, observer) => {
  console.dir(entries);
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log(`%c entry.isIntersecting: ${entry.isIntersecting}`, 'background: yellow');
    } else {
      console.log(`%c entry.isIntersecting: ${entry.isIntersecting}`, 'background: #f1212');
    }
    console.log(`%c entry.intersectionRatio: ${entry.intersectionRatio}`, 'background: #1212');
    if (!entry.isIntersecting && entry.intersectionRatio > 0) {
      // console.log(`%c entry.isIntersecting: ${entry.isIntersecting}`, 'background: yellow');
      // console.log(`%c entry.intersectionRatio: ${entry.intersectionRatio}`, 'background: yellow');
      const index = sectionIds.indexOf(`#${entry.target.id}`);
      console.log(`entry.boundingClientRect.y: ${entry.boundingClientRect.y}`);
      if (entry.boundingClientRect.y < 0) {
        selectedNavIndex = index + 1;
        console.log(`%c selectedNavIndex puls puls+++!! ${selectedNavIndex}`, 'background: red');
      } else {
        selectedNavIndex = index - 1;
        console.log(`%c selectedNavIndex minus minus-----!! ${selectedNavIndex}`, 'background: blue');
      }
    }
    console.log(`-----------------------------------------------------------`);
  });

}

const observer = new IntersectionObserver(observerCallback, observerOptions);
setctions.forEach(section => observer.observe(section));

window.addEventListener('wheel', () => {
  if (window.scrollY === 0) {
    selectedNavIndex = 0;
    console.log(`if1----------------`);
  } else if (Math.round(window.scrollY + window.innerHeight) >= document.body.clientHeight) {
    console.log(`if2----------------`);
    console.log(`window.scrollY + window.innerHeight: ${window.scrollY + window.innerHeight}`);
    console.log(`document.body.clientHeight: ${document.body.clientHeight}`);
    selectedNavIndex = sectionIds.length - 1;
  }
  console.log(`selectedNavIndex: ${selectedNavIndex}`);
  selectNavItem(navItems[selectedNavIndex]);
});