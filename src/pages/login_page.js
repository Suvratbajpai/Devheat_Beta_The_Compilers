import React, { useState } from 'react';
import Navbar from "../components/navbar";
import "../pages/login_page.css";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    isLoggedIn: false,
    errorMessage: '',
    isSubmitting: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value, errorMessage: '' }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { username, password } = formData;
    try {
      const response = await fetch('http://localhost:5483/HackedIn/v1/login', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.status === 200) {
        const { token } = await response.json();
        setFormData(prevState => ({ ...prevState, token }));
        console.log('Authentication successful');
      } else {
        console.error('Authentication failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const { username, password, errorMessage, isSubmitting } = formData;

  return (
    React.createElement(React.Fragment, null,
      React.createElement(Navbar, null),
      React.createElement('div', { className: 'login-container' },
        React.createElement('h2', null, 'Login'),
        React.createElement('div', { className: `error-message ${errorMessage ? 'show' : ''}` }, errorMessage),
        React.createElement('input', {
          type: 'text',
          name: 'username',
          placeholder: 'Username',
          value: username,
          onChange: handleInputChange,
          disabled: isSubmitting,
        }),
        React.createElement('input', {
          type: 'password',
          name: 'password',
          placeholder: 'Password',
          value: password,
          onChange: handleInputChange,
          disabled: isSubmitting,
        }),
        React.createElement('button', {
          className: `login-button ${isSubmitting ? 'loading' : ''}`,
          onClick: handleLogin,
          disabled: isSubmitting,
        }, isSubmitting ? 'Logging in...' : 'Login')
      )
    )
  );
}

export default LoginPage;
