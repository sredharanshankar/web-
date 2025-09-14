import React, { useState } from 'react';
import './PostRide.css';

const PostRide = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ from, to, date });
  };

  return (
    <section className="post-ride-container">
      <h2>Post a Ride</h2>
      <form onSubmit={handleSubmit} className="post-ride-form">
        <input type="text" placeholder="From" value={from} onChange={(e) => setFrom(e.target.value)} required />
        <input type="text" placeholder="To" value={to} onChange={(e) => setTo(e.target.value)} required />
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        <button type="submit">Post Ride</button>
      </form>
    </section>
  );
};

export default PostRide;
