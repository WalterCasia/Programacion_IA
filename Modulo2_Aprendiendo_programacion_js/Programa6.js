// Estructuras de control parte 3 
// Ejercicio 1 
//Cada vez que una persona ingrese una hora del dia se mostrara un mnesaje que diga el deporte
// que se esta realizando en una cancha

const prompt = require('prompt-sync')();   // ------------- esto dice que le lleve estos datos a la consola
var hora = prompt ("Dame la hora ");
//console.log(hora);

if (hora <= 3){
    console.log("Esta el equipo de futbol entrenado");
}
else if ((hora > 3)&& (hora <= 6)){
    console.log("Esta el equipo de futbol americano");
}
else if ((hora > 6)&&(hora <= 9)) {
    console.log("Esta el equipo de atletismo ");
}

// Pedir datos desde pantalla
// npm install prompt-sync
//const prompt = require('prompt-sync')();
//var nombre = prompt ("Ingresa tu nombre");
//console.log ("Hola" + nombre);

//Ejercicio planteado con switch

switch (hora <= 3){
    case true:
        console.log("Esta el equipo de futbol entrenado");
        break;
    case false:
        console.log("esta otro equipo entrenado");
        break;

}

const prompt = require('prompt-sync')();
var deporte = prompt ("Por favor dime el nombre del deporte: ");

switch(deporte){
    case "Futbol":
        console.log("El horario es de 1 a 3 pm");
        break;
    case"futbol americano":
        console.log("Horario de 3 a 6 pm");
        break;
    case "atlestismo":
        console.log("horario de 6 a 9 pm");
        break;
}

//Arreglo

var arreglonum = [ 1,2,3,4,5];
console.log(arreglonum);
var arreglonombres = ["Luis", "Walter", "Mario"];
console.log(arreglonombres);
var arreglomix = [20, 16, 45,  , "walter",  , "chile",true,false];
console.log(arreglomix);

console.log(arreglonombres[0]);  // --------------------- La pocicion inicial es 0 