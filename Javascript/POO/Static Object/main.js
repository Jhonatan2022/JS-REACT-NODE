const juan = {
  name: "JuanDC",
  age: 26,
  aprovedCourses: ["Name one"],
  addCourse(newCourse) {
    this.aprovedCourses.push(newCourse);
  },
};

// console.log(Object.keys(juan));
// // ["name", "age", "aprovedCourses", "addCourse"]
// console.log("----------------------------------");

// console.log(Object.getOwnPropertyNames(juan));
// // ["name", "age", "aprovedCourses", "addCourse"]
// console.log("----------------------------------");

// console.log(Object.entries(juan)[2]);
// // [ ["name", "JuanDC"], ["age", 26], ["aprovedCourses", ["Name one"]], ["addCourse", f] ]

Object.seal(juan); // Configurable: false, no se puede eliminar ni agregar propiedades

Object.freeze(juan); // Configurable: false, Writable: false, no se puede eliminar, agregar ni modificar propiedades

Object.defineProperty(juan, "prueba", {
  value: "Hola mundo",
  writable: true,
  enumerable: true,
  configurable: true,
});

Object.defineProperty(juan, "prueba2", {
  value: "Hola mundo",
  writable: true,
  enumerable: false, // No se puede iterar pero si modificar su valor
  configurable: true,
});

Object.defineProperty(juan, "prueba3", {
  value: "Hola mundo",
  writable: false, // No se puede modificar su valor
  enumerable: true,
  configurable: true,
});

Object.defineProperty(juan, "prueba4", {
  value: "Hola mundo",
  writable: true,
  enumerable: true,
  configurable: false, // No se puede eliminaR
});

Object.defineProperty(juan, "prueba5", {
  // no se puede modificar su valor, no se puede iterar, no se puede eliminar
  value: "Hola mundo",
  writable: false,
  enumerable: false,
  configurable: false,
});

console.log("----------------------------------");
console.log(Object.getOwnPropertyDescriptors(juan));
