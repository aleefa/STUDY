import React, { useState } from 'react';

export default function LoginFormWithCode() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to generate 6-character short code
  const generateShortCode = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      code += chars[randomIndex];
    }
    return code;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const shortCode = generateShortCode();
    alert(`Email: ${email}\nPassword: ${password}\nYour short code: ${shortCode}`);
    // Reset form (optional)
    setEmail('');
    setPassword('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: 350,
        margin: '50px auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
      }}
    >
      <h2 style={{ textAlign: 'center' }}>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={{ padding: '10px', fontSize: '16px' }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        style={{ padding: '10px', fontSize: '16px' }}
      />
      <button
        type="submit"
        style={{
          padding: '10px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#1890ff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
        }}
      >
        Login
      </button>
    </form>
  );
}
