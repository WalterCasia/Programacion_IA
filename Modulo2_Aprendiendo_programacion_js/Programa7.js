// Arreglos parte 1 

var arreglonombres = ["luis", "Maria", "Carlos", "Marcos"];

console.log( arreglonombres [0] );

arreglonombres[2] = "Rosa";
console.log(arreglonombres[2]);

delete arreglonombres [2];  //-------------- Se borra el elemento del espacio pero no se borrara el espacio
console.log(arreglonombres);

console.log("La cantidad de elemetos en el arreglo es: "+ arreglonombres.length );  //--- .length muestra el numero de elementos

arreglonombres.push("Cristian"); //----------- Agrega elemtos al arreglo
console.log(arreglonombres);

arreglonombres.pop ();  //---------Se borra el elemento y el espaacio por igual
console.log(arreglonombres);

arreglonombres.splice(0, 0, "Julio") ;  // -------- sustituye un elemnto por otro en la ubicacion que indiquemos 
console.log(arreglonombres);            // o si solo queremos agregar un elemento mas. 

arreglonombres.splice( 1,4) ; //----se borran los elementos desde un lugar indicado y cuantos queremos que se eliminen
console.log(arreglonombres);

//Ejercicio
//Realiza un programa que lea por teclado 5 notas y muestre 
//el promedio de estas.

const prompt = require ('prompt-sync')();
var calificaciones = [];
calificaciones [0] = prompt("Dame la primera calificacion: ");
//console.log (calificaciones [0]) ;
calificaciones [1] = prompt("Dame la segunda calificacion: ") ;
calificaciones [2] = prompt("Dame la tercera calificacion: ") ;
calificaciones [3] = prompt("Dame la cuarta calificacion: ") ;
calificaciones [4] = prompt("Dame la quinta calificacion: ") ;

var  calif1  =  calificaciones [ 0 ] ;
var  calif2  =  calificaciones [ 1 ] ;
var  calif3  =  calificaciones [ 2 ] ;
var  calif4  =  calificaciones [ 3 ] ;
var  calif5  =  calificaciones [ 4 ] ;

var  resultado  =  parseInt ( calif1 )  +  parseInt ( calif2 ) 
+  parseInt ( calif3 )  +  parseInt ( calif4 )  +  parseInt ( calif5 ) ;

resultado  /=  5 ;

console.log (  resultado  ) ;


var concatenar = ["Hola", "Buenas", "Tardes"];
var concatenarN2 = ["Adios", "Buenas", "Noches"];
console.log(concatenar.concat(concatenarN2));
