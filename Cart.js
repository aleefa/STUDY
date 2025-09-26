import React, { useState } from 'react';

function LoginAndCart() {
  // --- Login form state ---
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
    setEmail('');
    setPassword('');
  };

  // --- Product list & cart state ---
  const [cart, setCart] = useState(0);
  const products = [
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Phone', price: 700 },
    { id: 3, name: 'Headphones', price: 150 },
  ];

  const handleAddToCart = () => {
    setCart(cart + 1);
  };

  return (
    <div>
      {/* Login Form */}
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Login</button>
      </form>

      <hr />

      {/* Product List */}
      <h2>Products</h2>
      <p>Total Items in Cart: {cart}</p>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}{' '}
            <button onClick={handleAddToCart}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LoginAndCart;
