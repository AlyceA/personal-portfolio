import { planets } from '../data/planets.js';

const mainContent = document.querySelector('main');
const screen = document.querySelector('#screen');
const buttonLeft = document.querySelector('#buttonLeft');
const buttonRight = document.querySelector('#buttonRight');
const displayedPlanet = document.querySelector('#displayedPlanet');

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
  populateMain(planets[planetIndex]);
}

function populateMain(planet) {
  planetName.textContent = planet.name;
  planetClimate.textContent = planet.climate + " planet";
  displayedPlanet.src = `https://starwars-visualguide.com/assets/img/planets/${currentIndex}.jpg`;
}

// Planet information screen with a "nav" or "list" of planets on the left-hand side. Planet information will include planet image, planet name, planet climate, rotational period, orbital period, diameter, gravity, surface water, terrain, and population.
