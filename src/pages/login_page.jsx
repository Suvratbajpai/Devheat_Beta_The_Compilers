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

  handleLogin = () => {
    const { username, password } = this.state; 

    // Simulate authentication (replace with actual authentication logic)
    this.setState({ isSubmitting: true }, () => {
      setTimeout(() => {
        if (username === 'your_username' && password === 'your_password') {
          this.setState({ isLoggedIn: true, errorMessage: '' });
        } else {
          this.setState({ errorMessage: 'Invalid username or password' });
        }
        this.setState({ isSubmitting: false });
      }, 1000); // Simulated delay
    });
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
