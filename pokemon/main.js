const pokeGrid = document.querySelector('.pokeGrid')
const loadButton = document.querySelector('.loadPokemon')
const findButton = document.querySelector('.findPokemon')
const newButton = document.querySelector('.newPokemon')

loadButton.addEventListener('click', () => {
    loadPage()
})

findButton.addEventListener('click', () => {
    let pokeID = prompt("Pokemon ID or Name:").toLowerCase()
    getAPIData(`https://pokeapi.co/api/v2/pokemon/${pokeID}`).then(
        (data) => populatePokeCard(data)
    ).catch(error => console.log(error))
})

class Pokemon {
    constructor(name, weight, height, abilities, moves, types) {
        this.id = 900
        this.name = name
        this.weight = weight
        this.height = height
        this.abilities = abilities
        this.moves = moves
        this.types = types
    }
}

newButton.addEventListener('click', () => {
    let pokeName = prompt('New Pokemon Name:').toLowerCase()
    let pokeWeight = prompt('Pokemon Weight:')
    let pokeHeight = prompt('Pokemon Height:')
    let pokeAbilities
    let pokeMoves
    let pokeTypes
    let pokeHP
    let newPokemon = new Pokemon(
        pokeName, 
        pokeWeight, 
        pokeHeight,
        ['eat', 'sleep'],
        ['study', 'code', 'silence'],
        ['normal', 'poison']
        )
    populatePokeCard(newPokemon)
})

async function getAPIData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
        alert('Pokemon Not Found')
    }
}

function loadPage() {
    let limit = 25
    let offset = 0

    getAPIData(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`).then(
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
    frontImg.src = getImageFile(pokemon)
    pokeFront.appendChild(frontImg)

    pokeFront.appendChild(frontLabel)
    return pokeFront
}

function populateCardBack(pokemon) {
    let pokeBack = document.createElement('div')
    pokeBack.className = 'card__face card__face--back'
    let backLabel = document.createElement('div')

    let statWeight = document.createElement('p')
    let statHeight = document.createElement('p')
    let statHP = document.createElement('p')
    let statAttack = document.createElement('p')
    let statDefense = document.createElement('p')
    let statSpeed = document.createElement('p')
    // let statType = document.createElement('p')

    statWeight.textContent = `Weight: ${getWeightInKg(pokemon)} kg`
    statHeight.textContent = `Height: ${getHeightInM(pokemon)} m`
    // statHP.textContent = `HP: ${pokemon.stats[0].base_stat}`
    // statAttack.textContent = `Attack: ${pokemon.stats[1].base_stat}`
    // statDefense.textContent = `Defense: ${pokemon.stats[2].base_stat}`
    // statSpeed.textContent = `Speed: ${pokemon.stats[5].base_stat}`
    
    // statType.textContent = `Type: ${pokemon.types[0].type.name}`

    // backLabel.appendChild(statType)
    backLabel.appendChild(statHP)
    backLabel.appendChild(statAttack)
    backLabel.appendChild(statDefense)
    backLabel.appendChild(statSpeed)
    backLabel.appendChild(statWeight)
    backLabel.appendChild(statHeight)
    pokeBack.appendChild(backLabel)
    return pokeBack
}

function getImageFile(pokemon) {
    let pokeID
    if (pokemon.id < 10) pokeID = `00${pokemon.id}`
    if (pokemon.id > 9 && pokemon.id < 100) pokeID = `0${pokemon.id}`
    if (pokemon.id > 99 && pokemon.id < 810) pokeID = `${pokemon.id}`
    if (pokemon.id === 900) {
        return `images/pokeball_PNG21.png`
    }
    return `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${pokeID}.png`
}

function getWeightInKg(pokemon) {
    let weight = (pokemon.weight)/10
    return weight
}

function getHeightInM(pokemon) {
    let height = (pokemon.height)/10
    return height
}