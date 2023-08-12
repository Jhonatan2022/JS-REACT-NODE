nombres = [{ nombre: "Juan" }, { nombre: "Pedro" }, { nombre: "Pablo" }];

function hola(nombres, apellido = "Perez") {
    console.log(`Hola ${nombres.nombre} ${apellido}`);
    }

while (nombres.length > 0) {
    // tambien se puede usar nombres.shift()
    hola(nombres.pop(), "Gonzalez");
}