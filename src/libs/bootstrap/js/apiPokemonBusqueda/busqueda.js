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
    })[0]
    console.log(test_search)

    const result = document.createElement('div');
    result.id = "result1-div"
    const imgNormal = document.createElement('img')
    imgNormal.src = test_search.imgUrlNormal
    const imgShiny = document.createElement('img')
    imgShiny.src = test_search.imgUrlShiny
    const name = test_search.name.charAt(0).toUpperCase() + test_search.name.slice(1);
    result.appendChild(document.createTextNode(`Name: ${name}`))
    result.appendChild(document.createElement("br"))
    result.appendChild(document.createTextNode(`Id: ${test_search.id}`))
    result.appendChild(document.createElement("br"))
    result.appendChild(document.createTextNode('Normal version:'))
    result.appendChild(document.createElement("br"))
    result.appendChild(imgNormal)
    result.appendChild(document.createElement("br"))
    result.appendChild(document.createTextNode('\nShiny version:'))
    result.appendChild(document.createElement("br"))
    result.appendChild(imgShiny)

    document.getElementById('result-container').appendChild(result)
}

document.getElementById("search1").addEventListener("click", search1)
