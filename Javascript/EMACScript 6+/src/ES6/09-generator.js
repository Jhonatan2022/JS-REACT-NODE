function* iterate(array) {
    for (let element of array) {
        yield element
    }
}

let iterator = iterate(["MNUEL", "JUAN", "PEDRO"])
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);