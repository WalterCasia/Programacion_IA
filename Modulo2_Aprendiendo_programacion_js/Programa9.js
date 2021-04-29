// Ciclos  -- estrcturas de control iterativas
// While

var contador = 5; 
var contadorN2 = 30;
while (contador <=10 && contadorN2 >=25 ) {
    console.log("Contador: " + contador + " contadorN2:  " + contadorN2);
    contador++;
    contadorN2--;
};

// Ciclos - do while

var contadorN3 = 0;
var condicion = "Hola";
do {
    console.log("Entraste al ciclo do while");
    contadorN3++;
    if(contadorN3==2){
        condicion = "Adios";
    }
}while( condicion == "Hola");

//-------------------------------------------------
var condicionN4 = 5;
do{
    console.log("Valor " + condicionN4);
    condicionN4 -= 5;
}while( condicionN4 >= 5 );

// Ejercicio do while
// Crear un programa que lea tantos numeros como se quiera hasta que se reciba un 0, y se mostrara un resultado, 
// que sera la suma de tdos los numeros ingresados.

const prompt = require('prompt-sync')();
var recibenum ;
var suma = 0;
do{
    recibenum = prompt("Dame un numero: ");  //-----Recibimos un texto y colocamos un prseint
     suma = suma + parseInt(recibenum);
}while(recibenum != 0);       // -----------Para finalizar la pedida de numeros se coloca un 0

console.log("La suma total es " + suma);

//-----------------------------------------------
var recibenum ;
var suma= 0;
while (recibenum != 0){
    recibenum = prompt("dame un numero: ");
    suma = suma + parseInt(recibenum);

}
console.log("La suma de los numeros es: "+ suma );