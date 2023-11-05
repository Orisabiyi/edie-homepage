'use strict';

const navElement = document.querySelector('.nav');
const header = document.querySelector('.header')
const navHeight = navElement.getBoundingClientRect();
console.log(navHeight);

navElement.addEventListener('click', function (e) {
  e.preventDefault();
  const target = e.target;
  if (target.classList.contains('nav__link')) {
    const sectionId = document.querySelector(`${target.getAttribute('href')}`)
    sectionId.scrollIntoView({ behavior: 'smooth' })
  }
})

const navOnScroll = function () {
  const navFunc = function (entries, observer) {
    const [entry] = entries;
    console.log(entry);
    if (!entry.isIntersecting) {
      navElement.classList.add('fixed');
    } else {
      navElement.classList.remove('fixed');
    }


  }
  const navObserve = new IntersectionObserver(navFunc, {
    root: null,
    threshold: 0,
    rootMargin: '-91px'
  })
  navObserve.observe(header);
}

navOnScroll();
