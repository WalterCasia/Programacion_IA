// Estructura de control condicionales
// Ejemplo
// Dado un numero, separarlo en centenas, decenas y unidades,
// intercambiar la pisicion entre las centenas y las unidades
// e imprimir el numero final

var numeroCompleto = 738;

if (numeroCompleto <= 999 && numeroCompleto >= 100) {

    var centenas = parseInt (numeroCompleto / 100);    // parseInt se utiliza para volver enteros los numeros con decimales
    //console.log(centenas); 

    var decenas = parseInt ((numeroCompleto % 100)/10);
    //console.log(decenas);

    var unidades = ((numeroCompleto % 100) - (decenas * 10));
    //console.log(unidades);

    //console.log("El valor final es:" + unidades + decenas + centenas);
}
else {
    //console.log("Ingresa un numero valido de 3 cifras");
}

// Condicional swicht

var condicionS = "Luis";
var edad = 19;

switch (condicionS){
    case 2:
        console.log("El valor ingresado es: 2");
        break;
    case 6:
        console.log("Valor ingresado es: 6");
        break;
    case "Luis":
        console.log("Hola Luis");
        if (edad >= 18){
            console.log("Ya eres mayor de edad")
        }
        break;
    default:
        console.log("El valor ingresado no coincide");

}