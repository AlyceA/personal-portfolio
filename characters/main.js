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