import React, { useState } from "react";
import Navbar from "../components/after_loginNavbar";
import { Link } from "react-router-dom";
import "./hackathon_page.css";

function hackathon_page() {
  const cardStyle = { width: "20rem" };

  return (
    <>
      <Navbar />
      <div className="hackathon-cards">
        <div class="card" style={cardStyle}>
          <img src="/images/hack1.jpeg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">InnovateX</h5>
            <p class="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              repudiandae.
            </p>
            <Link to="/HackedIn/v1/team" class="hack1 btn btn-primary">
              Hack
            </Link>
          </div>
        </div>
        <div class="card" style={cardStyle}>
          <img src="/images/hack2.jpeg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">InnoTechXperience</h5>
            <p class="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              repudiandae.
            </p>
            <a href="#" class="hack2 btn btn-primary">
              Hack
            </a>
          </div>
        </div>
        <div class="card" style={cardStyle}>
          <img src="/images/hack3.jpeg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">CodeCrafters Challenge</h5>
            <p class="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              repudiandae.
            </p>
            <a href="#" class="hack3 btn btn-primary">
              Hack
            </a>
          </div>
        </div>
        <div class="card" style={cardStyle}>
          <img src="/images/hack4.jpeg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">AI Avengers Hackfest</h5>
            <p class="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              repudiandae.
            </p>
            <a href="#" class="hack4 btn btn-primary">
              Hack
            </a>
          </div>
        </div>
        <div class="card" style={cardStyle}>
          <img src="/images/hack5.jpeg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">HackXcellence</h5>
            <p class="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              repudiandae.
            </p>
            <a href="#" class="hack5 btn btn-primary">
              Hack
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default hackathon_page;
