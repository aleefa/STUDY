import React, { useState } from 'react';

export default function ShoppingCart() {
  const [cart, setCart] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div style={{ maxWidth: 400, margin: '50px auto', textAlign: 'center' }}>
      <h2>Products</h2>
      <button onClick={() => addToCart("Apple")}>Add Apple</button>
      <button onClick={() => addToCart("Banana")}>Add Banana</button>

      <h3>Cart:</h3>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
