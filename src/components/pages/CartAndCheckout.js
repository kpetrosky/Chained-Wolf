import React, { useState } from 'react';

const CartAndCheckout = () => {
  // Define state to hold cart items
  const [cartItems, setCartItems] = useState([]);

  // Add a sample product to the cart
  const addToCart = () => {
    const newCartItem = {
      id: 1,
      name: 'Sample Product',
      price: 19.99,
    };
    setCartItems([...cartItems, newCartItem]);
  };

  // Calculate the total price of items in the cart
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <h2>Cart and Checkout</h2>
      <button onClick={addToCart}>Add Sample Product to Cart</button>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <p>Total Price: ${getTotalPrice()}</p>
      {/* Additional checkout process components and functionality can be added here */}
    </div>
  );
};

export default CartAndCheckout;
