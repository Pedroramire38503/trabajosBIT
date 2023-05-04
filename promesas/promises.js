let Numero = new Promise((resolve,reject) => {

    let N = 0

    if(N % 2 == 0){

        return resolve({res: "es par"})
    } else {
        return reject({res: "es impar"})
    }
    
})

Numero

    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })


