nombres = [{ nombre: "Juan" }, { nombre: "Pedro" }, { nombre: "Pablo" }];

function hola(nombres, apellido = "Perez") {
  console.log(`Hola ${nombres.nombre} ${apellido}`);
}

for (var i = 0; i < nombres.length; i++) {
  hola(nombres[i]);
}