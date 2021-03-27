import { planets } from '../data/planets.js';

const mainContent = document.querySelector('main');
const screen = document.querySelector('#screen');
const planetFigure = document.querySelectorAll('.planet');
const buttonLeft = document.querySelector('#buttonLeft');
const buttonRight = document.querySelector('#buttonRight');
const mainPlanet = document.querySelector('#mainPlanet');

let currentIndex = 15;

buttonRight.addEventListener('click', increase);
buttonLeft.addEventListener('click', decrease);

populateDOM(currentIndex);

function increase() {
  currentIndex += 1;
  populateDOM(currentIndex);
  console.log(currentIndex);
}

function decrease() {
  currentIndex -= 1;
  populateDOM(currentIndex);
  console.log(currentIndex);
}

function populateDOM(planetIndex) {
  // populateLeft(planets[planetIndex - 1]);
  populateMain(planets[planetIndex]);
  // populateRight(planets[planetIndex + 1]);
}

// should add 'left' class to planetFigure
function addLeftClass() {
  planetFigure.forEach((planet) => {
    removeActiveClasses();
    planet.classList.add('left');
  });
}

// should add 'main' class to planetFigure
function addMainClass() {
  planetFigure.forEach((planet) => {
    removeActiveClasses();
    planet.classList.add('main');
  });
}

// should add 'right' class to planetFigure
function addRightClass() {
  planetFigure.forEach((planet) => {
    removeActiveClasses();
    planet.classList.add('right');
  });
}

// removes classes from planetFigure
function removeActiveClasses() {
  planetFigure.forEach((planet) => {
    planet.classList.remove('left', 'main', 'right');
  });
}

function populateLeft() {
  const planetImg = document.createElement('img');
  planetImg.src = `https://starwars-visualguide.com/assets/img/planets/${planetNum}.jpg`;

  addLeftClass;
  planetFigure.appendChild(planetImg);
  screen.appendChild(planetFigure);
}

function populateRight() {
  const planetImg = document.createElement('img');
  planetImg.src = `https://starwars-visualguide.com/assets/img/planets/${planetNum}.jpg`;

  addRightClass;
  planetFigure.appendChild(planetImg);
  screen.appendChild(planetFigure);
}

function populateMain(planet) {
  mainPlanetName.textContent = planet.name;
  // const planetImg = document.createElement('img');
  // const planetName = document.createElement('div');
  // planetImg.src = `https://starwars-visualguide.com/assets/img/planets/${planet.id}.jpg`;

  // addMainClass;
  // planetName.textContent = planet.name;
  // planetFigure.appendChild(planetImg);
  // planetFigure.appendChild(planetName);
  // screen.appendChild(planetFigure);
}

// // display 3 planets at a time, middle one larger (flexgrow/shrink) with name below it, when the arrow on the left is clicked, the planet on the left moves to the middle position and vice-versa for the right arrow. When there are no more planets available, the arrow should disappear and there should only be two planets on the screen.

// // if there's time, can add rotation period, orbital period, diameter, climate, gravity, terrain, surface water, population under middle planet
