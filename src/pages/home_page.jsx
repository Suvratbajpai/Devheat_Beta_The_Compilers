import React from "react";
import Navbar from "../components/navbar";
import "./home_page.css";

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="home-container">
        <h1>Welcome to The Hackathons Dashboard</h1>
        <p>Find, participate, and create hackathons.</p>
        <div className="cta-buttons">
          <a href="/signup" className="signup-button">
            Sign Up
          </a>
          <a href="/login" className="login-button">
            Login
          </a>
          {/* <a href="/Hackathons_info" className="hakathons_info-button">
            Learn more about hackathons
          </a> */}
          {/* <a href="/my-hackathons" className="my-hackathons-button">
            My Hackathons
          </a> */}
        </div>
      </div>
      {/* About and Contact Us section */}
      <div className="footer">
        <div className="about-section">
          <h2>About</h2>
          <p>
            Description about hackathons can be displayed here.
          </p>
        </div>
        <div className="contact-section">
          <h2>Contact Us</h2>
          <p>
            Phone: 9120318899
            <br />
            Address: SUV International School,Valthan,Surat-394325
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
