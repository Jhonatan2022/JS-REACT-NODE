// const manu = {
//     name: 'Manu',
//     lastName: 'Gutierrez',
//     age: 25,
//     rol: ['admin', 'user'],
//     newRol: function (rolname){
//         this.rol.push(rolname);
//     }
// }

// Prototipo con sintaxis de funciones
function User(name, lastName, age, rol) {
  this.name = name;
  this.lastName = lastName;
  this.age = age;
  this.rol = rol;
}

User.prototype.newRol = function (newRol) {
  this.rol.push(newRol);
};

// Prototipo con sintaxis de clases
class User2 {
  // constructor(name, lastName, age, rol) {
  constructor({
    name = "default",
    lastName,
    age = null,
    email = "default",
    rol = ["User"],
  }) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.rol = rol;
    this.email = email;
  }

  newRol(newRol) {
    this.rol.push(newRol);
  }
}

const manu = new User2({
  name: "Manu",
  lastName: "Gutierrez",
  age: 25,
  rol: ["admin", "user"],
});
