const anotherfunction = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Hey!');
        } else {
            reject('Whooops!');
        }
    });
}

anotherfunction()
    .then(response => console.log(response))
    .catch(error => console.log(error));