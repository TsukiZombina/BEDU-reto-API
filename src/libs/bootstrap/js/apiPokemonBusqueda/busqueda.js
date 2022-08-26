const app = document.getElementById('app');

let pokeData;

function getPokemonData() {
    return fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=2000')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            pokeData = data.results;
            console.log("Test");
            console.log(pokeData);
        })
}

if (pokeData == null) {
    getPokemonData()
}

console.log(pokeData)

function test() {
    let input_text = document.getElementById("input-search1").value
    let test_search = pokeData.filter(obj => {
        return obj.name === input_text.toLowerCase()
    })
    console.log(test_search)
}

document.getElementById("search1").addEventListener("click", test)
