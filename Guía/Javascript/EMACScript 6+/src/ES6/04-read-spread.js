// arrays destructuring
let fruits = ['apple', 'orange', 'banana'];
let [a, b, c] = fruits;
console.log(a, fruits[1]);


// objects destructuring 
let person = {
    name: 'Ricardo',
    age: 23,
    country: 'MX'
}

let { name, age, country } = person;
console.log(name, age, country);