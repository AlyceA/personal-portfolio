import { senators } from '../data/senators.js';

const congressGrid = document.querySelector('.congressGrid');
const senatorButton = document.querySelector('#senators');
const senateDemButton = document.querySelector('#senateDemocrats')
const senateRepubButton = document.querySelector('#senateRepublicans');
const senateIndButton = document.querySelector('#senateIndependents');
const senateSeniorButton = document.querySelector('#senateSortSeniority');

populateCongressGrid(pullSimpleList(senators));

senatorButton.addEventListener('click', () => {
    removeChildren(congressGrid);
    populateCongressGrid(pullSimpleList(senators));
})


senateDemButton.addEventListener('click', () => {
    removeChildren(congressGrid);
    populateCongressGrid(filterCongressPeople(senators, 'D'))
})

senateRepubButton.addEventListener('click', () => {
    removeChildren(congressGrid);
    populateCongressGrid(filterCongressPeople(senators, 'R'))
})

senateIndButton.addEventListener('click', () => {
    removeChildren(congressGrid);
    populateCongressGrid(filterCongressPeople(senators, 'ID'))
})

senateSeniorButton.addEventListener('click', () => {
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

const filterCongressPeople = (senate, politicalParty) => {
    return pullSimpleList(senate).filter(person => person.party === politicalParty);
}

function senioritySort() {
    populateCongressGrid(pullSimpleList(senators).sort((a, b) => a.seniority - b.seniority).reverse())
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