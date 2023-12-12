'use strict';

const navElement = document.querySelector('.nav');
const header = document.querySelector('.header')
const navHeight = `-${navElement.getBoundingClientRect().height}px`;

const fixedNavigation = function () {
  const navFunc = function (entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) {
      navElement.classList.add('fixed');
    } else {
      navElement.classList.remove('fixed');
    }


  }
  const observing = new IntersectionObserver(navFunc, {
    root: null,
    threshold: 0,
    rootMargin: navHeight
  })
  observing.observe(header);
}

fixedNavigation();


// Event Listeners
navElement.addEventListener('click', function (e) {
  e.preventDefault();
  const target = e.target;
  if (target.classList.contains('nav__link')) {
    const sectionId = document.querySelector(`${target.getAttribute('href')}`)
    sectionId.scrollIntoView({ behavior: 'smooth' });
  }
})

navElement.addEventListener('click', function (e) {
  const target = e.target.closest('.nav__bar');
  if (!target) return;
  target.classList.toggle('fa-bars')
  target.classList.toggle('fa-xmark')
})
