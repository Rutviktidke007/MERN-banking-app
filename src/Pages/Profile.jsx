// Author: [Kiran Yadav (c3395436)]

import React, { useState } from 'react';
import '../styles/style.css'; 
/**
 * The Profile component displays and allows users to update their profile information
 * within the "Transformer Bank" web application.
 *
 * Created by Kiran Yadav (c3395436), this React component utilizes the useState hook to manage
 * user data such as first name, last name, email, and phone number.
 *
 * The initial user data is set as default values, and separate state variables are used to
 * track changes in each input field.
 *
 * The 'handleUpdateProfile' function is triggered when the user submits the form, preventing
 * the default form submission and updating the user data with the modified values.
 *
 * Input fields are provided for first name, last name, email, and phone number, with validation
 * to ensure that users provide the necessary information for updating their profile.
 *
 * The component is styled using CSS styles from the 'style.css' file, ensuring a consistent and
 * visually appealing design across the application.
 *
 * Overall, the Profile component enhances user interaction by providing a convenient way to view
 * and edit personal information, contributing to a personalized and user-centric experience.
 */


function Profile() {
  const [userData, setUserData] = useState({
    firstName: 'Kiran',
    lastName: 'Yadav',
    email: 'KiranYadav@example.com',
    phone: '999-444-890',
  });

  const [firstName, setFirstName] = useState(userData.firstName);
  const [lastName, setLastName] = useState(userData.lastName);
  const [email, setEmail] = useState(userData.email);
  const [phone, setPhone] = useState(userData.phone);

  const handleUpdateProfile = (e) => {
    e.preventDefault();

    setUserData({ firstName, lastName, email, phone });
  };

  return (
    <div className="profile">
      <h2>Your Profile</h2>
      <form onSubmit={handleUpdateProfile}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button className="cta-button" type="submit">
          Update Profile
        </button>
      </form>
    </div>
  );
}

export default Profile;
