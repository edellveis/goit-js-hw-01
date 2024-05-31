function makeTransaction(quantity, pricePerDroid) {
    const totalPrice = quantity * pricePerDroid;
    const message = `You ordered ${quantity} droids worth ${totalPrice}`;

    // Консольні логи 
    console.log("Total Price:", totalPrice);
    console.log("Message:", message);

    return message;
}