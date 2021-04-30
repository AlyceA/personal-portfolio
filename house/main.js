import { representatives } from '../data/representatives.js';

const congressGrid = document.querySelector('.congressGrid');
const representativeButton = document.querySelector('#representatives');
const houseDemButton = document.querySelector('#houseDemocrats')
const houseRepubButton = document.querySelector('#houseRepublicans');
const houseIndButton = document.querySelector('#houseIndependents');
const houseSeniorButton = document.querySelector('#houseSortSeniority');

populateCongressGrid(pullSimpleList(representatives));

representativeButton.addEventListener('click', () => {
    removeChildren(congressGrid);
    populateCongressGrid(pullSimpleList(representatives));
})


houseDemButton.addEventListener('click', () => {
    removeChildren(congressGrid);
    populateCongressGrid(filterCongressPeople(representatives, 'D'))
})

houseRepubButton.addEventListener('click', () => {
    removeChildren(congressGrid);
    populateCongressGrid(filterCongressPeople(representatives, 'R'))
})

houseIndButton.addEventListener('click', () => {
    removeChildren(congressGrid);
    populateCongressGrid(filterCongressPeople(representatives, 'ID'))
})

houseSeniorButton.addEventListener('click', () => {
    removeChildren(congressGrid);
    senioritySort()
})

function populateCongressGrid(simplifiedList) {
    simplifiedList.forEach(person => {
        let profileDiv = document.createElement('div');
        profileDiv.className = 'profileDiv';
        let profilePic = document.createElement('img');
        let profileName = document.createElement('p');
        let profileState = document.createElement('p');
        let profileParty = document.createElement('p');
        
        profilePic.src = person.imageURL;
        profileName.textContent = person.name;
        profileState.textContent = person.state;
        if (person.party === 'R') {
            profileParty.textContent = 'Republican'
        } else if (person.party === 'D') {
            profileParty.textContent = 'Democrat'
        } else {
            profileParty.textContent = 'Independent'
        }
        profileDiv.appendChild(profilePic);
        profileDiv.appendChild(profileName);
        profileDiv.appendChild(profileState);
        profileDiv.appendChild(profileParty);
        congressGrid.appendChild(profileDiv);
    })
}

const filterCongressPeople = (house, politicalParty) => {
    return pullSimpleList(house).filter(person => person.party === politicalParty);
}

function senioritySort() {
    populateCongressGrid(pullSimpleList(representatives).sort((a, b) => a.seniority - b.seniority).reverse())
}

function pullSimpleList(simpleList) {
    return simpleList.map(person => {
        return {
        id: person.id,
        name: `${person.first_name} ${person.last_name}`,
        imageURL: `https://www.govtrack.us/static/legislator-photos/${person.govtrack_id}-100px.jpeg`,
        seniority: parseInt(person.seniority, 10),
        party: person.party,
        state: person.state,
        shortTitle: person.short_title,
        url: person.url,
        }
    })
}

function removeChildren(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
}