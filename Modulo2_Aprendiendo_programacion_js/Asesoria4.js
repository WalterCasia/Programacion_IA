// Asesoria No.4
//Declarar una matriz ---- Es un arreglo de arreglos

let matrizPeces = [
    ["Salmon", "Atun"], ["Cangrejo", "Pez Globo"]
];
console.log(matrizPeces [1][0]);

// Descomosicion de objetos

let producto ={
    nombreProducto: "Chocolate",
    precio: 25,
    peso: "1.5 kg",
    cantidad: 5
}

let{ nombreProducto, peso} = producto ;
console.log(nombreProducto);
console.log(peso);

