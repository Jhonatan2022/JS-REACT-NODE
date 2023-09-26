nombrePersonas = [
  { nombre: "Juan", admin: true },
  { nombre: "Pedro", admin: false },
  { nombre: "Pablo", admin: true },
];

function saludar() {
  for (persona of nombrePersonas) {
    if (persona.admin === true) {
      console.log(`Bienvenido administrador ${persona.nombre}`);
    }
  }
}

for (persona of nombrePersonas) {
  persona.admin === true
    ? console.log(`Bienvenido administrador ${persona.nombre}`)
    : console.log(`Hola ${persona.nombre}`);
}

saludar();