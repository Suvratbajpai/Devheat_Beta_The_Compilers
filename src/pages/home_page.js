import React from "react";
import Navbar from "../components/navbar";
import "./home_page.css";

const HomePage = () => {
  return (
    React.createElement(React.Fragment, null,
      React.createElement(Navbar, null),
      React.createElement('div', { className: 'home-container' },
        React.createElement('h1', null, 'Welcome to The Hackathons Dashboard'),
        React.createElement('p', null, 'Find, participate, and create hackathons.'),
        React.createElement('div', { className: 'cta-buttons' },
          React.createElement('a', { href: '/HackedIn/v1/signup', className: 'signup-button' }, 'Sign Up'),
          React.createElement('a', { href: '/HackedIn/v1/login', className: 'login-button' }, 'Login')
          // Uncomment the lines below if needed
          // React.createElement('a', { href: '/Hackathons_info', className: 'hakathons_info-button' }, 'Learn more about hackathons'),
          // React.createElement('a', { href: '/my-hackathons', className: 'my-hackathons-button' }, 'My Hackathons')
        )
      ),
      React.createElement('div', { className: 'footer bg-dark' },
        React.createElement('div', { className: 'about-section' },
          React.createElement('h2', null, 'About'),
          React.createElement('p', null, 'Description about hackathons can be displayed here.')
        ),
        React.createElement('div', { className: 'contact-section' },
          React.createElement('h2', null, 'Contact Us'),
          React.createElement('p', null,
            'Phone: 9120318899',
            React.createElement('br', null),
            'Address: SUV International School,Valthan,Surat-394325'
          )
        )
      )
    )
  );
}

export default HomePage;
