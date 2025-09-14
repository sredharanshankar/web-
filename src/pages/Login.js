import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Authentication logic here
    navigate('/profile');
  };

  return (
    <section className="auth-section">
      <div className="auth-container">
        <h2>Login to ViPOOL</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" className="auth-btn">Login</button>
        </form>
        <p>Don't have an account? <a href="/signup">Sign Up</a></p>
      </div>
    </section>
  );
};

export default Login;
