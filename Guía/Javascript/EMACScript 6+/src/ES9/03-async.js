async function* anotherGenerator() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const another = anotherGenerator();
another.next().then(response => console.log(response.value));
another.next().then(response => console.log(response.value));
another.next().then(response => console.log(response.value));


async function arrayOfNames (array){
    for await (let name of array){
        console.log(name);
    }
}

const names = arrayOfNames(['Oscar', 'Ana', 'Maria']);
console.log('After');