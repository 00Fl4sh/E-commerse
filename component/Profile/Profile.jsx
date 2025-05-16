import React, { useState } from 'react';
import './Profile.css'; // Import CSS file for styling
import defaultProfilePic from './../../assest/model 1.png'; // Import default profile picture

const Profile = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    address: '123 Main St, City, Country',
    phone: '123-456-7890',
    profilePic: defaultProfilePic, // Default profile picture
    orders: [
      { id: 1, date: '2024-03-10', total: 50.00 },
      { id: 2, date: '2024-03-05', total: 30.00 },
      { id: 3, date: '2024-03-01', total: 80.00 },
    ],
  });

  return (
    <div className="user-profile-container">
      <div className="user-profile">
        <div className="profile-header">
          <img src={user.profilePic} width={180} alt="Profile" className="profile-pic" />
          <h2 className="profile-heading">Welcome, {user.name}!</h2>
        </div>
        <div className="profile-info">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Address:</strong> {user.address}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
        </div>
        <div className="orders-container">
          <h3>Recent Orders:</h3>
          <ul>
            {user.orders.map(order => (
              <li key={order.id}>
                Order ID: {order.id}, Date: {order.date}, Total: ${order.total.toFixed(2)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
