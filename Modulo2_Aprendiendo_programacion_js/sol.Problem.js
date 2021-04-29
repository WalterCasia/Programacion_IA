const prompt = require("prompt-sync")();
var textN0 = "Producto         Codigo           precio"
textN1 = "Chocolate:       xc23             $12000";
textN2 = "Paleta :         c4f2             $5000";
textN3 = "chicle:          gt74             $200";
textN4 = "Galleta:         l3k8             $1000";

//Se imprime la variable textN0 en consola | \n se utiliza para dar un salto de linea 
        console.log(textN0, "\n", "\n" + textN1, "\n" + textN2, "\n" + textN3, "\n" + textN4, "\n");

var producto = prompt("Escribe el codigo del producto que quieres comprar:  ");
// el codigo que se escriba en consola se almacena en la var producto
switch(producto){ 
    case "xc23":
        console.log("quieres comprar un Chocolate");
        var dinero = prompt("ingresa la cantidad de dinero:  "); //lo que se escriba se almacena en var dinero
        if(dinero == 12000){
            console.log("gracias por su compra");
        } else if(dinero > 12000){
            console.log(("gracias por su compra su cambio es de: ") + (dinero - 12000));
        } else{
            console.log("1dinero insuficiente" + producto);
        }       break; // se coloca break para que el codigo no siga ejecutandose 
    case"c4f2":
        console.log("quieres comprar una paleta");
        var dinero = prompt("ingresa la cantidad de dinero:  ");
        if(dinero == 5000){
            console.log("gracias por su compra");
        } else if(dinero > 5000){
            console.log(("gracias por su compra su cambio es de: ") + (dinero - 5000));
        } else if(dinero < 5000){
            console.log("dinero insficiente\n");
        }      break;
    case "gt74":
        console.log("quieres comprar un chicle");
        var dinero = prompt("ingresa la cantidad de dinero:  ");
        if(dinero == 200){
            console.log("gracias por su compra");
        } else if(dinero > 200){
            console.log(("gracias por su compra su cambio es de: ") + (dinero - 200));
        } else {
            console.log("3dinero insi¿uficiene");
        }       break;
    case "l3k8":
        console.log("quieres comprar una Galleta");
        var dinero = prompt("ingresa la cantidad de dinero:  ");
        if(dinero == 1000){
            console.log("gracias por su compra");
        } else if(dinero > 1000){
            console.log(("gracias por su compra su cambio es de: ") + (dinero - 1000));
        } else {
            console.log("4dinero insi¿uficiene");
        }       break;
};