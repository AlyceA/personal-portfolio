const pokeGrid = document.querySelector('.pokeGrid')
const loadButton = document.querySelector('.loadPokemon')
const fetchButton = document.querySelector('.fetchPokemonByID')

loadButton.addEventListener('click', () => {
    loadPage()
})


async function getAPIData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

function loadPage() {
    getAPIData(`https://pokeapi.co/api/v2/pokemon?limit=25`).then(
        async (data) => {
            for (const singlePokemon of data.results) {
                await getAPIData(singlePokemon.url).then(
                    (pokeData) => populatePokeCard(pokeData)
                ) 
            }
        }
    )
}

function populatePokeCard(singlePokemon) {
    let pokeScene = document.createElement('div')
    pokeScene.className = 'scene'
    let pokeCard = document.createElement('div')
    pokeCard.className = 'card'

    pokeCard.addEventListener('click', () => {
        pokeCard.classList.toggle('is-flipped')
    })

    pokeCard.appendChild(populateCardFront(singlePokemon))
    pokeCard.appendChild(populateCardBack(singlePokemon))
    pokeScene.appendChild(pokeCard)
    pokeGrid.appendChild(pokeScene)
}

function populateCardFront(pokemon) {
    let pokeFront = document.createElement('div')
    pokeFront.className = 'card__face card__face--front'
    let frontLabel = document.createElement('p')
    frontLabel.textContent = pokemon.name
    let frontImg = document.createElement('img')
    frontImg.src = `images/${getImageFileName(pokemon)}.png`
    pokeFront.appendChild(frontImg)

    pokeFront.appendChild(frontLabel)
    return pokeFront
}

function populateCardBack(pokemon) {
    let pokeBack = document.createElement('div')
    pokeBack.className = 'card__face card__face--back'
    let backLabel = document.createElement('div')
    let statMoves = document.createElement('p')
    statMoves.textContent = `Number of moves: ${pokemon.moves.length}`
    let statWeight = document.createElement('p')
    statWeight.textContent = `Weight: ${getWeightInKg(pokemon)} kg`
    let statHeight = document.createElement('p')
    statHeight.textContent = `Height: ${getHeightInM(pokemon)} m`
    // let statType = document.createElement('p')
    // statType.textContent = `Type: ${pokemon.types[0].type.name}`

    // backLabel.appendChild(statType)
    backLabel.appendChild(statWeight)
    backLabel.appendChild(statHeight)
    backLabel.appendChild(statMoves)
    pokeBack.appendChild(backLabel)
    return pokeBack
}

function getImageFileName(pokemon) {
    if (pokemon.id < 10) {
        return `00${pokemon.id}`
    } else if (pokemon.id > 9 && pokemon.id < 100) {
        return `0${pokemon.id}`
    }
    return `${pokemon.id}`
}

function getWeightInKg(pokemon) {
    let weight = (pokemon.weight)/10
    return weight
}

function getHeightInM(pokemon) {
    let height = (pokemon.height)/10
    return height
}