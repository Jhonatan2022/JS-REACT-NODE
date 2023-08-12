// array
const array = [1, "jaja", true, false, { nombre: "lala", edad: 3 }];


// Objeto
const obj = {
  nombre: "Fulanito",
  edad: 3,
  comidasFavoritas: ["Pollo frito", "vegetales"],
};


// Imprimir primer elemento del array
function mostrarfirrst(arr) {
    console.log(arr[0]);
}

mostrarfirrst(['hola', 'chau', 'jaja']);



// imprimir uno por uno los elementos del array
function mostrarunoPorUno(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

mostrarunoPorUno(['hola', 'chau', 'jaja']);




function imprimirElementoPorElementoObjeto(obj) {
    const arr = Object.values(obj);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

imprimirElementoPorElementoObjeto({ nombre: "Fulanito", edad: 3, comidasFavoritas: ["Pollo frito", "vegetales"] });