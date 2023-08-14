const promise = new Promise((resolve, reject) =>{
    resolve('Success')
})


const cows = 15;

const countCows = new Promise((resolve, reject)=> {
    if(cows > 10){
        resolve('You have a lot of cows')
    }else{
        reject('You have a few cows')
    }
})

countCows.then((result) => {
    console.log(result)
}).catch((error) => {
    console.error(error)
}).finally(() => {
    console.log('Process finished')
});