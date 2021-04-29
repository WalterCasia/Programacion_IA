// Utiliria de JavaScript
//biblioteca

//biblioteca math------------------------------------------------

console.log(parseInt(Math.random() * 10));  //----math.random() nos muestra un numero aleatorio

console.log(Math.round(Math.random() * 10 )); // -- math.round() esta funcion nos aproxima al numero

exports.numramdom = () => {
    return resultado = Math.round(Math.random()*10);
 }

 // Metodos de cadenas--------------------------------------------

var cadenaTex = "Hola Lucia, buenas tardes Lucia";
console.log( cadenaTex.length );

console.log( cadenaTex.indexOf("Lucia") ); //Nos indica la posicion en donde se encuentra la primera aparicion

console.log(cadenaTex.replace("Lucia", "Angel"));//Esta funcion cambia un valor por otro

var nombre = cadenaTex.slice(5,10);//extrae el valor de una cadena de texto
console.log(nombre);

/*
const numero = require('./Programa14.js');  // con esta lineas se llama a una funcion de otro programa

console.log(numero.numramdom());
*/