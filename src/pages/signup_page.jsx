import React, { Component } from 'react';
import './signup_page.css';
import Navbar from '../components/navbar';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleChange =  (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = this.state;
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

      this.setState({ token });

      console.log('Authentication successful');

      } else {
        console.error('Authentication failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }

    this.props.history.push('/HackedIn/v1/hackathon');

  };

  render() {
    const { username, email, password, confirmPassword } = this.state;

    return (
      <>
      <Navbar/>
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={this.handleChange}
            required
          />
          {/* <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.handleChange}
            required
          /> */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={this.handleChange}
            required
          />
          {/* <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={this.handleChange}
            required
          /> */}
          <button type="submit">Sign Up</button>
        </form>
      </div>
      
      </>
    );
  }
}

export default SignUp;
