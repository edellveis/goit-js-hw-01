function makeTransaction(quantity, pricePerDroid) {
    const totalPrice = quantity * pricePerDroid;
    const message = `You ordered ${quantity} droids worth ${totalPrice}`;
    return message;

}
console.log(makeTransaction(5, 3000)); // 15000
console.log(makeTransaction(3, 1000)); // 3000
console.log(makeTransaction(10, 500)); // 5000