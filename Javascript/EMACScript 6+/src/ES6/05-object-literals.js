// enahced object literals
function newUser(name, age, country, uId) {
    return {
        name, // name: name,
        age,
        country,
        id: uId
    }
}

console.log(newUser('Ricardo', 23, 'MX', 1));