
// De lo que se hablo en la asesoria semana 1 

//console.log("ejecucion desde bloc de notas");

//const numero1 = 20;
//let numerto2 = 39;
// nueva variable que se implementara mas adelante

// Ejemplo:  Pra calcular el promedio de practica de un curso se tomaran las calificaciones de las 4 practicas
// que se hicieron, de estas 4 se va a eliminar la prctica con menor calificacion y se obtendra el promedio de 
// las 3 practicas restantes.

const califi1 = 85;
const califi2 = 75;
const califi3 = 90;
const califi4 = 100;
var califimenor = califi1;
var resultado = 0;

if ( califi2 < califimenor) {
    califimenor = califi2;
}
else if  (califi3 < califimenor){
    califimenor = califi3;
}
else if (califi4 < califimenor){
    califimenor = califi4;
}

resultado = (califi1 + califi2 + califi3 + califi4 - califimenor)/3;


console.log("El promedio del estudiantes es:" + resultado);
console.log("La nota mas baja es:" + califimenor);