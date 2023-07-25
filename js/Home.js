function addToCart(name, image, price) {
    const cartItem = {
        name: name,
        image: image,
        price: price,
        quantity: 1,
    };

    const existingCart = localStorage.getItem('cart');
    const cart = existingCart ? JSON.parse(existingCart) : [];
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));

 


}
