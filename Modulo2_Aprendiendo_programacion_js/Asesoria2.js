// Asesoria No.2 

// Crea un programa en donde tengas que adivianr las letras de una palabra de 4 letras, tendras solo
// 4 intentos para divinarla, en un inicio de la palabra estara oculta, pero cada vez que aciertes, 
// se mostrara la letra, si adivinas la palabra antes de que se te acaben los intentos ganas, sino 
// pierdes.

const prompt = require('prompt-sync')();
console.log("Ingrese letra a letra la palabra a adivinar")
var palabraoculta = [];
var palabramostrada = [ "-", "-", "-", "-" ];

var contadorasiertos = 0;
var contadorFallas = 4;

palabraoculta [ 0 ] = prompt("Dame la letra numero 1: ");
palabraoculta [ 1 ] = prompt( "Dame la letra numero 2: ");
palabraoculta [ 2 ] = prompt("Dame la letra numero 3: ");
palabraoculta [ 3 ] = prompt("Dame la letra numero 4: ");
//console.log (palabraoculta);


for( var i = 0; i < (palabraoculta.length * 2) ; i++){
    var intento = prompt("Ingresa una letra: ");
    switch(intento){
        case palabraoculta[0]:
            palabramostrada[0] = palabraoculta[0];
            console.log(palabramostrada);
            contadorasiertos ++;
            break;
        case palabraoculta[1]:
            palabramostrada[1] = palabraoculta[1];
            console.log(palabramostrada);
            contadorasiertos++;
            break;
        case palabraoculta [2]:
            palabramostrada[2] = palabraoculta [2];
            console.log(palabramostrada);
            contadorasiertos++;
            break;
        case palabraoculta [3]:
            palabramostrada[3] = palabraoculta [3];
            console.log( palabramostrada);
            contadorasiertos++;
            break;
        default:
            console.log("Te equivocaste :(");
            console.log("Te quedan " + (contadorFallas - 1 ) + " intentos '-'");
            console.log(palabramostrada);
            contadorFallas--;
            break;
    }
    if(contadorasiertos == 4 ){
        break;
    }
    else if (contadorFallas == 0) {
        break;
    }
}

if ((contadorFallas == 0 && contadorasiertos <4 ) || (contadorFallas < 4 && contadorasiertos < 4)) {
    console.log("PERDISTE, Vuelve a intentarlo");
}
else if (contadorasiertos ==4){
    console.log("GANASTE, Adivinaste la palabra ");
}