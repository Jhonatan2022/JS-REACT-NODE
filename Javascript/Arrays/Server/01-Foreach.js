const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

// for (let index = 0; index < letters.length; index++) {
//     const element = letters[index];
//     console.log(element);
// }


letters.forEach((element, index) => {
    console.log(`${index} - ${element}`);
});