//Utileria de JavaScript

//Cadenas de ejemplo de texto
var cadenaT = "Color Del Cuaderno/libreta";
var color = "Azul";

//Metodo toUpperCase
console.log(cadenaT.toUpperCase());//------toUpperCase Convierte toda la cadena de teto a mayuscula

//Metodo toLowerCase
console.log(cadenaT.toLowerCase());//------toLowerCase convierte toda la cadena de texto a minusculas

//metodo concat
console.log(cadenaT.concat(color));

//Funciones asincronas -------------------------------------------------------------------------------------

//Funciones sincronas
/*console.log("Inicia");

function dos(){
    console.log("Dos");
}

function uno (){
    console.log("Uno");
    dos ();
    console.log("Tres");
}
uno();
console.log("fin");
*/

//Funcion asincrona

console.log("Inicio")
function dos(){
    setTimeout(function(){
        console.log("Dos");
    }, 3000 ); //-------------Todos es medido en milisegundos
}

function uno () {
    setTimeout(function(){
        console.log("Uno");
    }, 0 );
    dos();
    console.log("Tres");
}

uno();
console.log("Fin");