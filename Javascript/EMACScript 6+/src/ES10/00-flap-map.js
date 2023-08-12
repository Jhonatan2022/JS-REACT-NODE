const array = [11,2,3,4, [22,2,3, [33,2,3]]];
console.log(array.flat(3));


const array2 = [1,2,3,4,5];
console.log(array2.flatMap(value => [value, value * 2]));