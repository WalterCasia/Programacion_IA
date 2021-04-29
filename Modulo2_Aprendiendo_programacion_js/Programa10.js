// Programacion de funciones parte 1
// Declaracion de una funcion

function multiplicar ( primeroreando, segundooperando ){
    var resultado = primeroreando * segundooperando;
    console.log("El resultado es: " + resultado);
}
multiplicar (25, 2);

function multiplicarN3 (){
    var resultado = 2 * 2;
    console.log("El resultado es: " + resultado);
}

multiplicarN3 (  );

// Funcion como una expresion ------------------------------------------

var resultado = function multiplicarN2 (primeroreando){
    return 2 * primeroreando;   // La funcion del return es que el resultado lo guarda en la variable "resultado"
}
console.log( "El resultado es: " + parseInt(resultado ( 25 )) );

// Funcion Flecha -------------------------------------------------------
// Funcion que saluda a una persona

const saludapersona = ( nombre ) => console.log("Hola " + nombre );
saludapersona ("Walter");

const suma = ( numero) => console.log( numero *2);
suma (12);

//Ejercicio 1
//Escribir un programa que tenga la funcion a la que se le pasa como parametro un numero y devuelve como 
//resultado un texto que indica si el numero es par o impar.

function deternumero (numero){
    if((numero % 2)== 1 ){
        console.log ("El numero " + numero + " es impar");
    }
    else if((numero % 2 ) == 0 ){
        console.log("El numero "+ numero + " es par");
    }
}

deternumero (50);

// Ejercicio # 2
//Definir una funcion que muestre la informacion de un texto que se introduce como un argumento y determina 
//si el texto contiene mayusculas, minusculas o ambas.

function detertexto (texto){
    if( texto == texto.toUpperCase ()){   // . toupperCase se usa para volver un texto a MAYUSCULAS
        console.log("El texto "+ texto + " esta en mayusculas");
    }
    else if (texto == texto.toLowerCase()){
        console.log("El texto "+ texto + " esta en misnuculas");
    }
}
detertexto ("carro");