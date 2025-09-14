import React from 'react';
import './AvailableRides.css';

const AvailableRides = () => {
  const rides = [
    { id: 1, from: 'New York', to: 'Boston', date: '2025-04-10' },
    { id: 2, from: 'San Francisco', to: 'Los Angeles', date: '2025-04-12' }
  ];

  return (
    <section className="available-rides-container">
      <h2>Available Rides</h2>
      <ul>
        {rides.map(ride => (
          <li key={ride.id}>{ride.from} to {ride.to} on {ride.date}</li>
        ))}
      </ul>
    </section>
  );
};

export default AvailableRides;
