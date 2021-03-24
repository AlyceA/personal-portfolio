import { people } from '../data/people.js';

const mainContent = document.querySelector('main');
const screenOne = document.querySelector('#screen-1');
const screenTwo = document.querySelector('#screen-2');

people.forEach(person => {
    
    const charFigure = document.createElement('figure')
    const charImg = document.createElement('img')
    let charNum = getLastNum(person.url)
    charImg.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`
    const charCaption = document.createElement('figcaption')

    charCaption.textContent = person.name

    charFigure.appendChild(charImg)
    charFigure.appendChild(charCaption)
    
    if(charNum < 45) {
        screenOne.appendChild(charFigure)
    }
    else {
        screenTwo.appendChild(charFigure);
    }
})

function getLastNum(url) {
    let end = url.lastIndexOf('/')
    let start = end - 2
    if (url.charAt(start) === '/') {
        start++
    }
    return url.slice(start, end)
}

function addStarField(element, numStars) {
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

addStarField(document.querySelector('body'), 400);