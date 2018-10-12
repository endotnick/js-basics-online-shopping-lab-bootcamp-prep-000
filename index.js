var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let product =  { 'itemName': item, 'itemPrice': Math.floor(Math.random() * 100)};
  setCart([...cart, product]);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  let result = cart.length > 0 ? 'In your cart, you have ' : 'Your shopping cart is empty.'

  for (let i = 0; i < cart.length; i++) {
    result += `${cart[i].itemName} at $${cart[i].itemPrice}`;
    if (i < cart.length - 1) {
      result += ', ';
      if ( i === cart.length - 2) {
        result += 'and ';
      }
    } else {
      result += '.';
    }
  }
  return result;
}

function total() {
  // write your code here
  let sum = 0;
  for (let i = 0; i < cart.length; i++) {
    sum += cart[i].itemPrice;
  }
  return sum;
}

function removeFromCart(item) {
  cart.forEach(product => {
    if(product.itemName === item) {
      cart.splice(cart.indexOf(product), 1);
      return cart;
    }
  });
}

function placeOrder(cardNumber) {
  // write your code here
}
