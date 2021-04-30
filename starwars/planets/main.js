// Planet information screen with a "nav" or "list" of planets on the right-hand side. Planet information will include planet image, planet name, planet climate, rotational period, orbital period, diameter, gravity, surface water, terrain, and population.

import { planets } from '../../data/planets.js';

const displayedPlanet = document.querySelector('#displayedPlanet');

populateDOM(1);

let items = document.getElementsByClassName("planetNav");

for (let i = 0; i < items.length; i++) {
  let indexName = 'Tatooine'
  items[i].addEventListener("click", function(e) {
    indexName = e.target.innerText;
    getIndex(indexName);
  });
};

function getIndex(planetName) {
  let index = planets.findIndex(item => item.name === planetName);
  populateDOM(index);
}

function populateDOM(index) {
  populateMain(planets[index], index);
}

//populates all divs with dynamic planet data
function populateMain(planet, index) {
  planetName.textContent = planet.name;
  planetClimate.textContent = planet.climate + " planet";
  planetPopulation.textContent = 'population ' + planet.population;
  planetRotationalPeriod.textContent = 'rotational period: ' + planet.rotation_period;
  planetOrbitalPeriod.textContent = 'orbital period: ' + planet.orbital_period;
  planetDiameter.textContent = 'diameter: ' + planet.diameter;
  planetGravity.textContent = 'gravity: ' + planet.gravity;
  surfaceWater.textContent = 'surface water: ' + planet.surface_water;
  terrain.textContent = 'terrain: ' + planet.terrain;
  climate.textContent = 'climate: ' + planet.climate;
  displayedPlanet.src = `https://starwars-visualguide.com/assets/img/planets/${index + 2}.jpg`; 
}