function newUser(name, age, country) {
    var name = name || 'default';
    var age = age || 0;
    var country = country || 'default';
    console.log(name, age, country);
}

newUser();
newUser('Ricardo', 23, 'MX');


// ES6
function newUserES6(name = 'default', age = 0, country = 'default') {
    console.log(name, age, country);
}

newUserES6();
newUserES6('Ricardo', 23, 'MX');
