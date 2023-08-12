// Setters y Getters
class user4 {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Metodo
    #speack() {
      return `Hello`;
    }
  
    greating() {
      return `${this.speack()} ${this.name}`;
    }
  
    // getters
    get #age() {
      return this._age;
    }
  
    // setters
    set #age(newAge) {
      this._age = newAge;
    }
  }
  
  const news4 = new user4("Juan", 20);
  console.log(news4.age);
  console.log(news4.age = 21);
  