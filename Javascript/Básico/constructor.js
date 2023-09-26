function empleado(nombre = "vacio", cargo = "vacio", salario = null) {
  this.nombre = nombre;
  this.cargo = cargo;
  this.salario = salario;
  this.datos = function () {
    return `Nombre: ${this.nombre}, Cargo: ${this.cargo}, Salario: ${this.salario}`;
  };
}

todos = [];

for (var i = 0; i < 2; i++) {
  var nombre = prompt("Ingrese nombre");
  var cargo = prompt("Ingrese cargo");
  var salario = prompt("Ingrese salario");
  todos.push(new empleado(nombre, cargo, salario));
}

for (empleado of todos) {
  console.log(empleado.datos());
}