const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

const newArray = letters.map(item => item + '++');

// const newArray = [];
// for (let i = 0; i < letters.length; i++) {
//     const element = letters[i];
//   newArray.push(element + '++');
// }

console.log('Original', letters);
console.log('New', newArray);