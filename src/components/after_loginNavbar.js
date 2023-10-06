import React from "react";
import { Link } from "react-router-dom";
import "./after_loginNavbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <div class="container d-flex gap-5 align-items-center">
            <Link class="navbar" to="/HackedIn/v1/home">
              <img
                src="/images/hackedin_logo.png"
                alt="logo"
                width="150"
                height="54"
                className="rounded"
              />
            </Link>

            <Link class="navbar-brand text-white" to="/HackedIn/v1/hackathon">
              Hackathons
            </Link>
            <Link
              class="navbar-brand text-white"
              to="/HackedIn/v1/my-hackathons"
            >
              My Hackathons
            </Link>
          </div>

          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          ></div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
