// Decompocicion de objetos Clase No.13
 /*
var celular = {
    color: "rojo",
    peso: "90",
    numerocam: 2,
    sistema: "Android 9",
    Duracionbat: "6 horas",
    prender: function(){return "Prendiendo..."},
    reiniciar:function () { return "Reiniciando..."}
}
*/
//console.log(celular);
//console.log(celular.prender());

//-------------------------------------------------
var frutas = {nombre: "Manzana"}
var frutaN2 = {nombre: "Manzana"}

//Caso No. 1
var resultado = ( frutas == frutaN2);
console.log( resultado );

//Caso No.2
var frutaN3 = frutas; //Los mismos parametros del objeto 1 se copian en este objeto
var resultadoN2 = ( frutaN3 == frutas );
console.log(resultadoN2);

//Descompocicion de objetos---------------------------------------------

let persona = { nombre: "Omar", apellido: "Guerrero", edad: 20  }
// Con composicion
let { nombre,apellido } = persona;

console.log("El nombre del participante es " + nombre + " " + apellido )

/*  sin descompociciom
var nombre2 = persona.nombre;
var apellido = persona.apellido;
*/

// Ejemplo No.2-----------------------------
let celulares = {color:"Rojo",numcama: 4}
let { color } = celulares ;

console.log(color);

//Ejemplo No.3 -----------------------------------
var paquete = {
    numEnvio: 321654,
    direccion:"calle lo de coy",
    peso: "3kg"
}

var numEnvio, peso;
({ numEnvio, peso } = paquete);

console.log(numEnvio);

// Ejemplo No. 4 
//valor por defecto

let persona2 = { nombre2: "Omar", edad: 20}
var {nombre2, apellido: apellido3 = "Lopez"} = persona2; // en apellido no se declaro en el objeto entoces se pone un valor de defecto si no lo indica
console.log( "El nombre es: " + nombre2 + " " + apellido3);


//Ejemplo No.5 ------------------------------------------------------
//Descompocicion de funciones

let pc = {
    procesador: "Core i7",
    ram: "2 GB",
    tarvideo: "GXRTX 3090"
}

function datospc ({procesador, ram}){    // Aqui se realiza la descompocicion solo se ponen llaves en la funcion
    console.log("El proceasdor es el: " + procesador );
    console.log("Cuenta con espacio de ram de : " + ram);
}

datospc( pc);
