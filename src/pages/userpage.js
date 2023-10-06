import React from "react";
import Navbar from "../components/after_loginNavbar";
import { useLocation } from "react-router-dom";
import "./userpage.css";

function UserPage() {
  const storedUsername = localStorage.getItem("username");
  return (
    <>
      <Navbar />
      <div className="userpage-container">
        <h1 className="userpage-heading">Welcome, {storedUsername}</h1>
        <p className="userpage-paragraph">
          HackedIn is your gateway to the world of hackathons and innovation.
          Connect with like-minded tech enthusiasts, discover exciting
          hackathons, and build your dream projects.
        </p>
        <p className="userpage-paragraph">
          Whether you're a seasoned hacker or just getting started, HackedIn has
          something for everyone. Join us today and unleash your creativity!
        </p>
        <p className="userpage-paragraph">
          Get ready to embark on a journey of innovation, collaboration, and
          endless possibilities. Let's start hacking together!
        </p>
      </div>
    </>
  );
}

export default UserPage;
