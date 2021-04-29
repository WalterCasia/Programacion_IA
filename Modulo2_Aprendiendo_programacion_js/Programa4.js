// Codigo de la clase 4 Estructuras de control

//Operadores logicos
var operandolog1 = 5;
var operandolog2 = 50;
var operandolog3 = 30;

// Operador && (AND o "Y")
//true && true --> true
//false && false --> false
// false && true --> false
// true && false --> false
var resultadolog1 = (operandolog1 < operandolog2) && (operandolog2 < operandolog3);
console.log("El resultado del operador & es:  "+ resultadolog1);

//Operador || ("OR" o "O")
// true || true --> true
// false || false --> false
// false || true --> true
// true || false --> true
var resultadolog2 = (operandolog1 < operandolog2) || (operandolog2 < operandolog3);
console.log("el resultado del operador O es: " + resultadolog2);

// Operador Negacion !
//  Todos los valores en la que se aplica se invierten de negativo a posotivo y viceversa
var resultadolog3 = !resultadolog2 ;
console.log("El resultado del operador Y, es: "+ resultadolog3);

//  Condicional IF
var numero1 = 5;
var numero2 = 50;
var numero = 30;

if(( numero1 < numero2 ) && (numero2 < numero)){
    console.log("entraste al if")
}
else if ( numero1 < numero){
    console.log("entraste al if else")
}
else{
    console.log("Entraste al else");
}
