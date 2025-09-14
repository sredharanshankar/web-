import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <section className="profile-container">
      <h2>My Profile</h2>
      <div className="profile-details">
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> johndoe@example.com</p>
        <p><strong>Phone:</strong> +123456789</p>
      </div>
    </section>
  );
};

export default Profile;
