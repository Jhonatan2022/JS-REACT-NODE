// https://api.escuelajs.co/api/v1/products

function hello(name, age) {
    return `Hello ${name}, you are ${age} years old`;
}

function obtainData(name, age, callback) {
    return callback(name, age);
}

console.log(obtainData('Jorge', 35, hello));


setTimeout(hello, 2000, 'Jorge');