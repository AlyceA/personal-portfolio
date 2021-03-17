import { people } from '../data/people.js';

const mainContent = document.querySelector('main');

const mainHeader = document.createElement('header');

const maleButton = document.createElement('button');
maleButton.textContent = "Male Characters";
maleButton.addEventListener('click', () => {
    populateDOM(maleCharacters)
});

const femaleButton = document.createElement('button');
femaleButton.textContent = "Female Characters";
femaleButton.addEventListener('click', () => {
    populateDOM(femaleCharacters)
});

const nbButton = document.createElement('button');
nbButton.textContent = "Non-Binary Characters";
nbButton.addEventListener('click', () => {
    populateDOM(nbCharacters)
});

mainHeader.appendChild(maleButton);
mainHeader.appendChild(femaleButton);
mainHeader.appendChild(nbButton);
document.body.insertBefore(mainHeader, mainContent);

const maleCharacters = people.filter(person => person.gender === "male");
const femaleCharacters = people.filter(person => person.gender === "female");
const nbCharacters = people.filter(person => {
    if (person.gender === "n/a" || person.gender === "none") {
        return person
    }
});

function populateDOM(characters) {
    characters.forEach(person => {
        const charFigure = document.createElement('figure');
        const charImage = document.createElement('img');
        let charNum = getLastNumber(person.url);
        charImage.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`;
        const charCaption = document.createElement('figcaption');

        charCaption.textContent = person.name;

        charFigure.appendChild(charImage);
        charFigure.appendChild(charCaption);
        mainContent.appendChild(charFigure);
    })
}

function getLastNumber(url) {
    let end = url.lastIndexOf('/')
    let start = end - 2
    if (url.charAt(start) === '/') {
        start++
    }
    return url.slice(start, end)
};