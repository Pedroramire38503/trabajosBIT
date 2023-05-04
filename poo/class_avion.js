class Avion{
    //atributos
    tipo_avion
    tamano
    modelo
    color
    fabricante

    constructor()

    //metodos
    volar()
    transporte_equipaje()
    rodar()
    aterrizar()
}

class operacionMatematica{
    numero1
    numero2

    constructor(numero1Usuario, numero2Usuario){
        this.numero1 = numero1Usuario
        this.numero2 = numero2Usuario
    }

    suma(){
        return this.numero1 + this.numero2

    }
    resta(){
        return this.numero1 - this.numero2
    }
    division(){
        return this.numero1 / this.numero2
    }
    multiplicar(){
        return this.numero1 * this.numero2
    }
    
}

let operacion = new operacionMatematica(5, 8)
console.log(operacion.division())
console.log(operacion.resta())
console.log(operacion.suma())
console.log(operacion.multiplicar())

