import { planets } from '../data/planets.js';

const mainContent = document.querySelector('main');
const screen = document.querySelector('#screen');

// display 3 planets at a time, middle one larger (flexgrow/shrink) with name below it, when the arrow on the left is clicked, the planet on the left moves to the middle position and vice-versa for the right arrow. When there are no more planets available, the arrow should disappear and there should only be two planets on the screen.

//if there's time, can add rotation period, orbital period, diameter, climate, gravity, terrain, surface water, population under middle planet.