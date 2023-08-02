// expresiva
var miFuncion = function(a, b) {
    return a + b;
}
miFuncion(1, 2);


// declarativa
function miFuncion(a, b) {
    return a + b;
}   
miFuncion(1, 2);


nombrePersonas = [
    {nombre: 'Juan'},
    {nombre: 'Pedro'},
    {nombre: 'Pablo'},
]


function saludar() {
    for (persona of nombrePersonas) {
        console.log(`Hola ${persona.nombre}`);
    }
}