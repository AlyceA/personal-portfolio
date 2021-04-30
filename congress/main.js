import { senators } from '../data/senators';
import { representatives } from '../data/representatives';

const congressGrid = document.querySelector('.congressGrid');
const senatorButton = document.querySelector('#senators');
const repButton = document.querySelector('#representatives');
const demButton = document.querySelector('#democrats');
const repubButton = document.querySelector('#republicans');
const indButton = document.querySelector('#independents');
const seniorButton = document.querySelector('#sortSeniority');

senatorButton.addEventListener('click', () => {
    populateCongressGrid(senators)
})

repButton.addEventListener('click', () => {
    populateCongressGrid(representatives)
})

demButton.addEventListener('click', () => {
    populateCongressGrid(filterCongressPeople(representatives, 'D'))
})

repubButton.addEventListener('click', () => {
    populateCongressGrid(filterCongressPeople(representatives, 'R'))
})

indButton.addEventListener('click', () => {
    populateCongressGrid(filterCongressPeople(representatives, 'ID'))
})

seniorButton.addEventListener('click', () => senioritySort())

//function populateCongressGrid
//function filterCongressPeople
//function senioritySort