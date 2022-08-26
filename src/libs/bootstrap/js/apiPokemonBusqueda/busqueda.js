const app = document.getElementById('app');

let pokeDataList;

// Gets name, id, normal version image url and shiny version image url for each pokémon
getPokemonList()
    .then(function (data) {

        console.log(data);

        pokeDataList = [];
        
        data.results.forEach(function (dataPoke) {
            fetch(dataPoke.url)
                .then(function (response) {
                    return response.json();
                })
                .then(function (pokeData) {
                    const name = pokeData.name
                    const id = pokeData.id
                    const imgNormal = pokeData.sprites.front_default
                    const imgShiny = pokeData.sprites.front_shiny
                    let pokemon = { name: name, id: id, imgUrlNormal: imgNormal, imgUrlShiny: imgShiny }
                    pokeDataList.push(pokemon)
                } )
          })

        console.log("PokeDataList");
        console.log(pokeDataList);
    })


function getPokemonList() {
    return fetch('https://pokeapi.co/api/v2/pokemon?limit=2000')
        .then(function (response) {
            return response.json();
        })
}

if (pokeDataList == null) {
    getPokemonList()
}

function search1() {
    let input_text = document.getElementById("input-search1").value
    let test_search = pokeDataList.filter(obj => {
        return obj.name === input_text.toLowerCase()
    })
    console.log(test_search)
}

document.getElementById("search1").addEventListener("click", search1)
