const fn = () => {
    return new Promise((resolve, reject) => {
       if (true) {
        resolve("Hello World");
       } else {
        reject(new Error("Test Error"));
       }
    });
}

fn()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log("Finalizó"));