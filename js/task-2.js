function getShippingMessage(country, price, deliveryFee) {
    const totalPrice = price + deliveryFee;
    const message = `Shipping to ${country} will cost ${totalPrice} credits`;

    // Консольні логи 
    console.log("Total Price:", totalPrice);
    console.log("Message:", message);

    return message;
}