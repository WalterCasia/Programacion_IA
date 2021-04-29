// Arreglos parte 2 

var concatenar = ["Hola", "Buenas", "Tardes"];
var concatenarN2 = ["Adios", "Buenas", "Noches"];

console.log(concatenar.concat(concatenarN2));   //-----concatenar dos arreglos, unirlos en un solo arreglo

// Metodo sort - sirve para ordenar
var frutasn1 = [ "Mandarina", "Piña", "Sandia", "Durazno"];
var frutasn2 = [ "Mandarina", "Piña", "Durazno"];
var arreglonum = [ 5000,10,2000,1000,400 ];
frutasn1.sort();   // --------------- ahi se le indica que ordene
console.log ( frutasn1 ) ;
frutasn2.sort();
console.log(frutasn2);
//arreglonum.sort();  //--------- sort se usa principalmente para texto
//console.log(arreglonum);

// Ciclos - For ----------------------------------------------------------------------------

console.log("Hola - Forma manual");
console.log("Hola - Forma manual");
console.log("Hola - Forma manual");

for (var i = 0; i <= 3; i++ ) {
    console.log("Hola - Forma Automatica " + "i: " + i);
}

// ctrl + c  -------> al momento de que se cicle un codigo ejecutar esto para pararlo

// [ 5000,10,2000,1000,400 ]
console.log(arreglonum [ 4 ]);

for ( var i = 0; i < arreglonum.length; i++ ){   //--------.length se utiliza para saber cuantos datos hay en mi arreglo
    console.log( "El valor del arreglo en la " + "posicion " + i + " es: " + arreglonum [i] );
}