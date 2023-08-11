class User {}

// Instanciar
const newUser = new User();

class user {
  // Metodo
  greating() {
    return "Hello World";
  }
}

const news = new user();
console.log(news.greating());

// Constructor
class user2 {
  constructor() {
    console.log("Hello World");
  }

  greating() {
    return "Hello World";
  }
}

const news2 = new user2();
console.log(news2.greating());

// this en clases
class user3 {
  constructor(name) {
    this.name = name;
  }

  // Metodo
  speack() {
    return `Hello`;
  }

  greating() {
    return `${this.speack()} ${this.name}`;
  }
}

const news3 = new user3("Juan");
console.log(news3.greating());



// Setters y Getters
class user4 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Metodo
  speack() {
    return `Hello`;
  }

  greating() {
    return `${this.speack()} ${this.name}`;
  }

  // getters
  get age() {
    return this._age;
  }

  // setters
  set age(newAge) {
    this._age = newAge;
  }
}

const news4 = new user4("Juan", 20);
console.log(news4.age);
console.log(news4.age = 21);
