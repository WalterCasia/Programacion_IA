// Introduccion a la paraadigma de la POO (Programacion Orientada a objetos)

// Declaracion explicita
//multiplicar(12);
function multiplicar (primeroperando){
    var resultado = 3* primeroperando;
    console.log("El resultado es: " + resultado);
}

// Declaracion como expresion --- En estas declaraciones no se puede llamar a la funcion al principio
var resultado = function multiplicar(primeroprendo){
    return 3 * primeroprendo;
}
//console.log(resultado(12));


// Programacion orientada a objetos ( POO )---------------------------------------------
// Creacion de un objeto
var celular = {
    color: "rojo",
    peso: "90",
    numerocam: 2,
    sistema: "Android 9",
    Duracionbat: "6 horas"
}

/*console.log(celular);
//obtener el valor de una caracteristica
console.log(celular.peso);
console.log(celular["numerocam"]);
*/

// declaracion de clase -----------------------------------------------------------------------------

class galleta{
    constructor ( dimension, forma, sabor ){
        this.dimension = dimension;
        this.forma = forma;
        this.sabor = sabor;
    }
}

let galletachocolate = new galleta("grande", "redonda", "chococolate");
var galletavainilla = new galleta("pequeña", "Cuadrada", "vainilla");

console.log(galletachocolate);
console.log(galletavainilla);

console.log(galletachocolate.dimension);
console.log(galletavainilla["sabor"]);