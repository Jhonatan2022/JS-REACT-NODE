const user = {
    name: 'Oscar',
    age: 32,
    country: 'MX'
}

const {name, ...all} = user;

console.log(name, all);