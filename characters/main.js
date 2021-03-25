import { people } from '../data/people.js';

const mainContent = document.querySelector('main');

const screen = document.querySelector('#screen');

const buttonArea = document.querySelector('#buttonArea');

// Populates the page with character images and names
people.forEach(person => {
    
    const charFigure = document.createElement('figure')
    const charImg = document.createElement('img')
    let charNum = getLastNum(person.url)
    charImg.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`
    const charCaption = document.createElement('figcaption')

    charCaption.textContent = person.name

    charFigure.appendChild(charImg)
    charFigure.appendChild(charCaption)

    screen.appendChild(charFigure)
})

const maleButton = document.createElement('button');
maleButton.textContent = "Male Characters";
maleButton.addEventListener('click', () => populateDOM(maleCharacters));

const femaleButton = document.createElement('button');
femaleButton.textContent = "Female Characters";
femaleButton.addEventListener('click', () => populateDOM(femaleCharacters));

const nbButton = document.createElement('button');
nbButton.textContent = "Other Characters";
nbButton.addEventListener('click', () => populateDOM(nbCharacters));

buttonArea.appendChild(maleButton);
buttonArea.appendChild(femaleButton);
buttonArea.appendChild(nbButton);

const maleCharacters = people.filter(person => person.gender === "male");
const femaleCharacters = people.filter(person => person.gender === "female");
const nbCharacters = people.filter(person => {
    if (person.gender === "n/a" || person.gender === "none" || person.gender === "hermaphrodite") {
        return person
    }
});

function populateDOM(characters) {
    removeChildren(screen)
    characters.forEach(person => {
        const charFigure = document.createElement('figure');
        const charImage = document.createElement('img');
        let charNum = getLastNum(person.url);
        charImage.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`;
        const charCaption = document.createElement('figcaption');

        charCaption.textContent = person.name;

        charFigure.appendChild(charImage);
        charFigure.appendChild(charCaption);
        screen.appendChild(charFigure);
    })
}

// Gets the number of the character from the urls (includes double digits)
function getLastNum(url) {
    let end = url.lastIndexOf('/')
    let start = end - 2
    if (url.charAt(start) === '/') {
        start++
    }
    return url.slice(start, end)
}

//removes children from container
function removeChildren(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
}





// Hopefully I'll figure this part out eventually...
// Should listen for a click on a charFigure, then run populateDOM with the appropriate character informtion

//creates a static NodeList
// const profileSelect = document.querySelectorAll('figure');
//creates an array from the static NodeList
// const profileList = Array.from(profileSelect);

//listens for any click in the body of the page
// document.body.addEventListener('click', listen, false);
//if the click is on an image within a figure, the function will log the img src (which we can use to identify which character was clicked)
// function listen(event) {
//     if (event.target.matches('figure')) return;
//     console.log(event.target);
// }


// Should clear the contents of the page, then generate the "Profile View" of the clicked person
//"Profile View" includes a profile picture, physical attributes (height, mass, hair color, skin color, eye color, gender, species), basic info (name, birth year, homeworld), wanted by (see function getWantedBy()), and bounty 
// function populateDOM(person) {
//     const physicalAtt = document.createElement('div')
//     const basicInfo = document.createElement('div')
//     const wantedBy = getWantedBy()
//     const bounty = getBounty()
// }

// Randomly select a person from a small list
// List: Darth Vader, Boba Fett, Darth Maul, Grievous, Greedo, IG-88, Jabba Desilijic Tiure, Han Solo, Bossk, Zam Wesell
function getWantedBy() {

}


// Generates a random bounty number
function getBounty() {
    let bounty = Math.floor(Math.random() * 10000)
    return bounty
}


// Right now, this generates a star field. I want to modify it to generate a grid in the background.
/* function addStarField(element, numStars) {
    element.style.setProperty('background-color', 'black')
    for (let i=0; i < numStars; i++) {
        let star = document.createElement('div')
        star.style.setProperty('width', '2px')
        star.style.setProperty('height', '2px')
        star.style.setProperty('background-color', 'white')

        let xy = getRandomPosition()
        star.style.left = `${xy[0]}px`
        star.style.top = `${xy[1]}px`

        star.style.setProperty('position', 'absolute')

        element.appendChild(star)
    }
}

function getRandomPosition() {
    let y = document.body.scrollHeight
    let x = document.body.scrollWidth
    let randomY = Math.floor(Math.random() * y)
    let randomX = Math.floor(Math.random() * x)
    return [randomX, randomY]
}

addStarField(document.querySelector('body'), 400); */