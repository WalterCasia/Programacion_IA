// Funciones partes 2 

function detertexto (texto){
    if( texto == texto.toUpperCase ()){   // . toupperCase se usa para volver un texto a MAYUSCULAS
        console.log("El texto "+ texto + " esta en mayusculas");
    }
    else if (texto == texto.toLowerCase()){   // tilowerCase se usa para volver texto en minusculas
        console.log("El texto "+ "''"+texto+"''" + " esta en minusculas");
    }
}
//detertexto ("hola");

// Ejercicio 1 
// Escribir un programa que obtenga el precio de un producto, y calcule el precio total, ya que tambien se va
// a cobrar el costo de de envio unicamente si el precio del producto es mayor o igual a Q 399.00

//Programa hecho por mi
const prompt = require('prompt-sync')();
function preciototal (preciopro, nombrepro){
    if (preciopro >=399){
        var total = parseInt(preciopro) + 50;
        console.log("El precio total del producto "+ nombrepro + ", mas coste de envio es: " + total+ " Q");
    }
    else if (preciopro >0 && preciopro<399){
        console.log("El precio total del producto "+nombrepro+ " es: "+ preciopro + " Q");
    }
    else{
        console.log("Ingrese un precio valido");
    }
}

//preciototal (preciopro = prompt ("Dame un precio: "), nombrepro = prompt("Dame el nombre del producto: ") )

//------------------------------------------------

var nombreproducto = "Celular";
var precioproducto = 500;

function preciototal(precio, nombreproducto){
    var resultado = 0;
    if (precio >= 399){
        console.log("Factura")
        console.log("Costo del " + nombreproducto + " es: " + precio);
        console.log("Costo de envio 100 Q")
        resultado = precio + 100;
        console.log("El total a pagar es: " + resultado);
    }
    else if (precio < 399){
        resultado = precio;
        console.log("El total a pagar es: " + resultado);
    }
}

//preciototal( precioproducto , nombreproducto)

// Ambito de una variable
// Variables locales
// Variables globales

function ambitovar(){
    const i = 1;
    if(i == 1){
        var variable = "Ambito de variable";
    } 
    console.log(variable);   //-------------en cualquier momento de mi funcion puedo acceder a mi funcion
}
ambitovar();
//console.log(variable); //----------- con el console aqui no se puede acceder a la varible

//Tipos de declaraciones-------------------------------
//let

//let nombre = "Walter";
//nombre = "Luis";
//console.log(nombre);

function ambitolet (){
    const  i = 1;
    if ( i == 1){
        let variablelet = "Ambito de variable - Let";
    }
    console.log(variablelet); //--------la variable let solo funciona dentro de una funcion 
}

//ambitolet();

var mensaje = "texto";

function mensajefuncion (){
    var mensaje = "texto 2 ";
    console.log(mensaje);
}

console.log (mensaje);
mensajefuncion();
console.log (mensaje);
