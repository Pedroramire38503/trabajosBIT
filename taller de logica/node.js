function pares() {

    let numeroUsuario = document.getElementById("digiteUnNumero").value
    let listaHtml = document.querySelector("#listaDeNumeros")

    if (numeroUsuario % 2 == 0) {
        console.log("numero par")
        listaHtml.innerHTML = `<a> el numero es Par </a>`
    } else {
        console.log("numero impar")
        listaHtml.innerHTML = `<a> el numero es impar </a>`
    }

    console.log(numeroUsuario)
}

function suma() {
    let numeroUsuario = document.getElementById("digiteUnNumero").value
    let listaDeNumeros = document.querySelector("#resultado")
    let sumatoria = 0
    for (let x = 1; x <= numeroUsuario; x++) {
        sumatoria = sumatoria + x
    }
    listaDeNumeros.innerHTML = `<h3>la suma es ${sumatoria}</h3>`
}

function premio() {
    let edadUsuario = document.getElementById("edad").value
    let premiosUsuario = document.querySelector("#premios")
    let generoUsuario = document.getElementById("genero").value
    if(generoUsuario == null && edadUsuario == null)
        console.error("digite su edad y seleccione un genero");
    if(edadUsuario <= 10){
        premiosUsuario.innerHTML = `<a> reclamar un juego </a>`
    }
    if (edadUsuario >= 18 && generoUsuario == 3){
    premiosUsuario.innerHTML = `<a> reclamar una cerveza y adicional una porcion de pizza Hawaiana </a>`
    }
    if(edadUsuario >= 18 && generoUsuario == 2){
    premiosUsuario.innerHTML = `<a> reclamar una cerveza y adicional una porcion de pizza tres carnes </a>`
    }
    if (edadUsuario >10 && edadUsuario < 18 ){
    premiosUsuario.innerHTML = `<a> Lamentablemente no recibes premio </a>`
    }

    
    

}


