//Funciones as  incronas parte 2
console.log("Hola");
setTimeout(function timeout () {
    console.log("Hola mundo")
}, 4 * 1000 );
console.log("Hola a los participantes");

//Callback-----------------------------------------------------------
function primero (Callback ){
    setTimeout (function (){
        return Callback("Primero");
    },5 * 1000);
}
function segundo (Callback){
    return Callback("Segundo");
}

primero(function (resultado1) {
    console.log(resultado1);
    segundo(function (resultado2){
        console.log(resultado2);
    });
});