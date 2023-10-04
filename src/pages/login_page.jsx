import React, { Component } from 'react';
import Navbar from "../components/navbar";
import "../pages/login_page.css";


class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoggedIn: false,
      errorMessage: '',
      isSubmitting: false, // To track form submission
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value, errorMessage: '' });
  };

  handleLogin = async (e) => {
    e.preventDefault();
    
    const { username, password } = this.state;
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

      this.setState({ token });

      console.log('Authentication successful');

      } else {
        console.error('Authentication failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
   
  };

  render() {
    const { username, password, isLoggedIn, errorMessage, isSubmitting } = this.state;

    return (
      <div>
        <Navbar />
        <div className="login-container">
          <h2>Login</h2>
          <div className={`error-message ${errorMessage ? 'show' : ''}`}>{errorMessage}</div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={this.handleInputChange}
            disabled={isSubmitting}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={this.handleInputChange}
            disabled={isSubmitting}
          />
          <button
            className={`login-button ${isSubmitting ? 'loading' : ''}`}
            onClick={this.handleLogin}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Logging in...' : 'Login'}
          </button>
        </div>
      </div>
    );
  }
}

export default LoginPage;
