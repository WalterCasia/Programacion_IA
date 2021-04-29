// Programacion de la maquina de Juan

const prompt = require('prompt-sync')();

var codigo ;
var precio ;
var cambio ;
console.log("Dulce          Codigo        precio");
console.log("Chocolate       xc23         12.50  ");
console.log("Paleta          c4f2          5.75  ");
console.log("Chicle          gt74          4.25  ");
console.log("Galleta         I3k8          9.10  ");

codigo = prompt("Ingrese el codigo del producto: ");

switch(codigo){
    case "xc23":
        console.log("Usted eligio chocolate");
        precio = prompt("Ingrese la cantidad de 12.50 Q ------");
        if(precio == 12.50){
            console.log("Compra exitosa, gracias por su preferencia")
        }
        else if (precio > 12.50){
            cambio = precio - 12.50;
            console.log("Compra de chocolate exitosa, Gracias por su preferencia.")
            console.log("Tu cambio es de " + cambio + "Q")
        }
        else{
            console.log("Dinero insuficiente para comprar este prdcuto");
        }
        break;
    case "c4f2":
        console.log("Usted eligio paleta");
        precio = prompt("Ingrese la cantidad de 5.75 Q ");
        if(precio == 5.75){
            console.log("Compra exitosa, gracias por su preferencia")
        }
        else if (precio > 5.75){
            cambio = precio - 5.75;
            console.log("Compra de paleta exitosa, Gracias por su preferencia.")
            console.log("Tu cambio es de " + cambio + "Q")
        }
        else{
            console.log("Dinero insuficiente para comprar este prdcuto");
        }
        break;
    case "gt74":
        console.log("Usted eligio chicle");
        precio = prompt("Ingrese la cantidad de 4.25 Q ");
        if(precio == 4.25){
            console.log("Compra exitosa, gracias por su preferencia")
        }
        else if (precio > 4.25){
            cambio = precio - 4.25;
            console.log("Compra de chicle exitosa, Gracias por su preferencia.")
            console.log("Tu cambio es de " + cambio)
        }
        else{
            console.log("Dinero insuficiente para comprar este prdcuto");
        }
        break;
    case "l3k8":
        console.log("Usted eligio galleta");
        precio = prompt("Ingrese la cantidad de 9.10 Q ");
        if(precio == 9.10){
            console.log("Compra exitosa, gracias por su preferencia")
        }
        else if (precio > 9.10){
            cambio = precio - 9.10;
            console.log("Compra de Galleta exitosa, Gracias por su preferencia.")
            console.log("Tu cambio es de " + cambio)
        }
        else{
            console.log("Dinero insuficiente para comprar este prdcuto");
        }
        break;
        default:
            console.log("ERROR Codigo incorrecto");
}