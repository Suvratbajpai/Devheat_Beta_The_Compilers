import React from "react";
import Navbar from "../components/navbar";
import "./home_page.css";

const HomePage = () => {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Navbar, null),
    React.createElement(
      "div",
      { className: "home-container" },
      React.createElement("h1", null, "Uniting Innovators"),
      React.createElement("p", null, "Signup for free to get started "),
      React.createElement(
        "div",
        { className: "cta-buttons" },
        React.createElement(
          "a",
          { href: "/HackedIn/v1/signup", className: "signup-button" },
          "Sign Up"
        ),
        React.createElement(
          "a",
          { href: "/HackedIn/v1/login", className: "login-button" },
          "Login"
        )
        // Uncomment the lines below if needed
        // React.createElement('a', { href: '/Hackathons_info', className: 'hakathons_info-button' }, 'Learn more about hackathons'),
        // React.createElement('a', { href: '/my-hackathons', className: 'my-hackathons-button' }, 'My Hackathons')
      )
    ),
    React.createElement(
      "div",
      { className: "footer bg-dark" },
      React.createElement(
        "div",
        { className: "about-section" },
        React.createElement("h2", null, "About"),
        React.createElement(
          "pre",
          null,
          `  Tired of searching for a skilled hackathon partner? Look no further! Welcome to HackedIn.
  Dive into a world of innovation with our platform, connecting techies like never before.
  From exploring hackathons to finding potential teammates, we've got it all.
  Get ready to 'hack-a-dosti' like never before, only on HackedIn! 🚀`
        )
      ),
      React.createElement(
        "div",
        { className: "contact-section" },
        React.createElement("h2", null, "Contact Us"),
        React.createElement(
          "pre",
          null,
          "  Phone: 9120318899",
          React.createElement("br", null),
          "  Address: SUV International School,Valthan,Surat-394325"
        )
      ),
      React.createElement(
        "div",
        { className: "copyright-section" },
        React.createElement("pre", null, "\u00A9 HackedIn @2023")
      )
    )
  );
};

export default HomePage;
