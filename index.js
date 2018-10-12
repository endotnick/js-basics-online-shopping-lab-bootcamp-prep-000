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
  // write your code here
  return cart.length > 0 ? cart.toString() : 'Your shopping cart is empty.';
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
