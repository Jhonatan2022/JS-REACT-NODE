const regex = /\b(Apple)+\b/g;

const str = 'Apple, Apple, and more Apple';


for (const match of str.matchAll(regex)) {
    console.log(match);
}
