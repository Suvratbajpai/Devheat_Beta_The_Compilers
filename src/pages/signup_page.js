import React, { useState } from 'react';
import './signup_page.css';
import Navbar from '../components/navbar';

const SignUp = ({ history }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = formData;
    try {
      const response = await fetch('http://localhost:5483/HackedIn/v1/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.status === 200) {
        const { token } = await response.json();
        // Assuming token is the correct state variable.
        setFormData({ ...formData, token });
        console.log('Authentication successful');
      } else {
        console.error('Authentication failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }

    history.push('/HackedIn/v1/hackathon');
  };

  const { username, email, password, confirmPassword } = formData;

  return (
    <>
      <Navbar />
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={handleChange}
            required
          />
          {/* <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
            required
          /> */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            required
          />
          {/* <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleChange}
            required
          /> */}
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
