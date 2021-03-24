import { people } from '../data/people.js';

const mainContent = document.querySelector('main');

const screen = document.querySelector('#screen');

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


// Gets the number of the character from the urls (includes double digits)
function getLastNum(url) {
    let end = url.lastIndexOf('/')
    let start = end - 2
    if (url.charAt(start) === '/') {
        start++
    }
    return url.slice(start, end)
}


// Should listen for a click on a charFigure, then run populateDOM with the appropriate character informtion
addEventListener('click', () => console.log('clicked'))


// Should clear the contents of the page, then generate the "Profile View" of the clicked person
//"Profile View" includes a profile picture, physical attributes (height, mass, hair color, skin color, eye color, gender, species), basic info (name, birth year, homeworld), wanted by (see function getWantedBy()), and bounty 
function populateDOM(profile) {
    removeChildren(mainContent)
    const profilePic = charFigure
    const physicalAtt = document.createElement('div')
    const basicInfo = document.createElement('div')
    const wantedBy = getWantedBy()
    const bounty = getBounty()
}


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