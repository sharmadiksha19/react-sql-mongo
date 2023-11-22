// utils.js
const calculateTotalPrice = (cartItems) => {
  let totalPrice = 0;

  for (const item of cartItems) {
    const discountedPrice = item.price - (item.price * item.discount) / 100;
    totalPrice += discountedPrice;
  }

  return totalPrice.toFixed(2);
};

export default calculateTotalPrice;
