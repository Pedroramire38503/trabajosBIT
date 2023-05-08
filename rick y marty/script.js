const obtenerPokemones = async() => {
    try {
        const consumoApi = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
        const dataJson = await consumoApi.json()
        dataJson.results.forEach(pokemon => {
            console.log(detallePokemon(pokemon.url))
        });
    } catch (error) {
        console.log(error)
    }
}

obtenerPokemones()
const detallePokemon = async(urlPokemon) => {
    try {const dataPokemon =await fetch(urlPokemon)
        const dataPokeDetalle = await dataPokemon.json()
        return dataPokeDetalle
    } catch (error) {
        console.log(error)
    }
    
    
}



// function imprimirPersonajes(list =[]) {
//     list.forEach(personaje => {
//         document.querySelector("#printer").innerHTML += `
//         <div class="card" style="width: 18rem;">
//         <img src="${personaje.image}" class="card-img-top" alt="...">
//         <div class="card-body">
//             <h5 class="card-title">${personaje.name}</h5>
//             <p class="card-text">${personaje.status}</p>
//             <p class="card-text">${personaje.species}</p>
//             <p class="card-text">${personaje.location.name}</p>
//         </div>
//     </div>`
//     })
    
// }