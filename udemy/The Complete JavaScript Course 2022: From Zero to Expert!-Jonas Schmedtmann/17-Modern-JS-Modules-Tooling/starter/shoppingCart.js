// Exporting module
console.log('Exporting Module');

// Blocking Code
console.log('Start fetching users');
await fetch('https://jsonplaceholder.typicode.com/posts');
console.log('finish fetching');

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
