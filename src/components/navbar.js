import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <div class="container d-flex gap-5 align-items-center">
            <Link class="navbar" to="/">
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
            <Link class="navbar-brand text-white" to="/my_hackathon">
              My-Hackathons
            </Link>
          </div>

          {/* <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul> */}
            {/* <form className="d-flex" role="search">
                            <Link
                                className="btn btn-outline-success"
                                to="/login"
                            >
                                login
                            </Link>
                        </form> */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
