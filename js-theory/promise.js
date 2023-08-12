let p = new Promise((resolve, reject) => {
    let num = null;
    setTimeout(() => {
        num = 2;
        if (num === 2) {
            resolve('Hey, happy days! Promise fulfilled.');
        } else {
            reject('Ooops, something went wrong! Promise rejected.');
        }
    }, 1000);
});

p.then(message => {
    console.log(message);
}).catch(message => {
    console.log(message);
});

console.log('Should be last, but wont be.');

