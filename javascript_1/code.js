// let llovio = false
// if(llovio == true){
//     console.log("si llovio")
// } else{
//     console.error("no llovio")
// }

function verificarUsuario() {

    let usuarioValido = "PedroRamirez"
    let passCorrecto = "contraseña123"

    let inputPassword = document.getElementById("inputUser")
    let inputUsuario = document.getElementById("inputPass")
    
    if (inputUsuario.value == usuarioValido){
        if(inputPassword.value == passCorrecto) { 
            alert("Bienvenido!!!")
        }else{
            alert("su credencial es incorrecta")
    } else {
        alert("sus credenciales son incorrectas ")
    }
}
}


for (let x = 0; x <= 100; x++) {
    console.log(x);
    
}