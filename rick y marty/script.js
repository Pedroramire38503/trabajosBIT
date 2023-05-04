
let bodyHtml = document.querySelector("body")
let divcards = document.createElement("div")
divcards.className = "row row-cols-1 row-cols-md-2 g-4"
bodyHtml.appendChild(divcards)


function buscarPersonaje() {

    const url = "https://pokeapi.co/api/v2/pokemon/";
    fetch(url).then(data => 
        data.json())
        

            // imprimirPersonajes(datos)
        })
    }
    .catch(error => console.log(error))



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

buscarPersonaje();