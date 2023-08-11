const regex = /(\d{4})-(\d{2})-(\d{2})/;
const match = regex.exec('2018-04-28');

console.table(match);