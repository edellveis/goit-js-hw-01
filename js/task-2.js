function getShippingMessage(country, price, deliveryFee){
    const totalPrice = price + deliveryFee;
    const message = `shipping to ${country} will cost ${totalPrice} credits`;
    return message;
}