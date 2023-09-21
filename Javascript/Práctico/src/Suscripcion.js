const tipoUser = "Basic";

if (tipoUser === "Basic") {
  console.log("Bienvenido a la versión básica");
} else if (tipoUser === "Premium") {
  console.log("Bienvenido a la versión Premium");
} else {
  console.log("Bienvenido a la versión Free");
}

let password;

while (password != "1234") {
  let passwordsend = prompt("Ingrese su contraseña");
  password = passwordsend;

  if (password == "1234") {
    console.log("Bienvenido administrador");
  }
}
