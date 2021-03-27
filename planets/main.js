import { planets } from '../data/planets.js';

const mainContent = document.querySelector('main');
const screen = document.querySelector('#screen');
const planetFigure = document.querySelectorAll('.planet');
const buttonLeft = document.querySelector('#buttonLeft');
const buttonRight = document.querySelector('#buttonRight');

let planetNum = 12;

buttonRight.addEventListener('click', increase);
buttonLeft.addEventListener('click', decrease);

console.log(planetNum);

function increase() {
  for (let num = 0; num < 1; num++) {
    planetNum = planetNum + 1;
  }
  console.log(planetNum);
}

function decrease() {
  for (let num = 2; num > 1; num--) {
    planetNum = planetNum - 1;
  }
  console.log(planetNum);
}

function populateLeft() {
  const planetImg = document.createElement('img');
  planetImg.src = `https://starwars-visualguide.com/assets/img/planets/${planetNum}.jpg`;

  decrease();
  addLeftClass();
}

function populateRight() {
  const planetImg = document.createElement('img');
  planetImg.src = `https://starwars-visualguide.com/assets/img/planets/${planetNum}.jpg`;

  increase();
  addRightClass();
  mainContent.appendChild(planetFigure);
  planetFigure.appendChild(planetImg);
}

function populateMain() {
  const planetImg = document.createElement('img');
  const planetName = document.createElement('div');
  planetImg.src = `https://starwars-visualguide.com/assets/img/planets/${planetNum}.jpg`;

  planetName.textContent = planet.name;
  planetFigure.appendChild(planetImg);
  PlanetFigure.appendChild(planetName);
}

// planets.forEach(planet => {
//     const planetImg = document.createElement('img');
//     const planetName = document.createElement('div');
//     planetImg.src = `https://starwars-visualguide.com/assets/img/planets/${planetNum}.jpg`;

//     planetName.textContent = planet.name;
//     screen.appendChild(planetImg);
//     screen.appendChild(planetName);
//         })

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
    planet.classList.remove('left' || 'main' || 'right');
  });
}

// const planetLeft = document.querySelector('#leftPlanet');
// const planetMain = document.querySelector('#mainPlanet');
// const planetRight = document.querySelector('#rightPlanet');
// const leftArrow = document.querySelector('#leftArrow');
// const rightArrow = document.querySelector('#rightArrow');

// let planetNum = 1

// if(document.getElementById().clicked == true) {
//     console.log('left was clicked');
// }

// // mainPlanet(planets);

// // function mainPlanet(planets) {
// //     planets.forEach(planet => {
// //         const planetImg = document.createElement('img');
// //         const planetName = document.createElement('div');
// //         let planetNum = getLastNumber(planet.url);
// //         planetImg.src = `https://starwars-visualguide.com/assets/img/planets/${planetNum}.jpg`;

// //         planetName.textContent = planet.name;
// //         planetMain.appendChild(planetImg);
// //         planetMain.appendChild(planetName);

// //         console.log(planetName);
// //     })
// // }

// // display 3 planets at a time, middle one larger (flexgrow/shrink) with name below it, when the arrow on the left is clicked, the planet on the left moves to the middle position and vice-versa for the right arrow. When there are no more planets available, the arrow should disappear and there should only be two planets on the screen.

// // if there's time, can add rotation period, orbital period, diameter, climate, gravity, terrain, surface water, population under middle planet
