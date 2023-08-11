// arrays destructuring
let fruits = ['apple', 'orange', 'banana'];
let [a, b, c] = fruits;
console.log(a, fruits[1]);


// objects destructuring 
// let person = {
//     name: 'Ricardo',
//     age: 23,
//     country: 'MX'
// }

// let { name, age, country } = person;
// console.log(name, age, country);



// Spread Operator
let person = {
    name: 'John',
    age: 30,
}
let country = 'COL';

let data = {
    id: 1,
    ...person,
    country,
};

console.log(data);



// Rest Operator
function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);

    return num + values[0];
}

sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);