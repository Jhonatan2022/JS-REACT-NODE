const prom = new Promise((resolve, reject) => reject('Reject'));
const prom2 = new Promise((resolve, reject) => resolve('Resolve'));
const prom3 = new Promise((resolve, reject) => resolve('Resolve'));

Promise.allSettled([prom, prom2, prom3])
    .then(resp => console.log(resp))