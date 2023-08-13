// Example-1
let p = new Promise((resolve, reject) => {
    let num = null;
    setTimeout(() => {
        num = 2;
        if (num === 2) {
            resolve('Happy days! Promise Example-1 fulfilled.');
        } else {
            reject('Oops, something went wrong! Promise Example-1 rejected.');
        }
    }, 1000);
});

p.then(message => {
    console.log(message);
}).catch(message => {
    console.log(message);
});

// Example-2
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { user: 'Karoly', location: 'London' };
            if (data) {
                resolve(data);
            } else {
                reject(false);
            }
        }, 1200);
    });
}

fetchData()
    .then(response => {
        console.log('Example-2 fetch result:', response);
    })
    .catch(error => {
        console.log('Oops, something went wrong! Promise Example-2 rejected.', error);
    });


console.log('Should be printed last, but wont be.');

