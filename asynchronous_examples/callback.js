function orderPizza(callback) {
    setTimeout(() => {
        const pizza = 'pepperoni pizza';
        callback(pizza);
    }, 2000);
}

function pizzaReady(pizza) {
    console.log(`You can eat the ${pizza} now.`)
}

orderPizza(pizzaReady);
console.log('Setting up the table.');

