import React, { useState } from "react";
import Navbar from "../components/after_loginNavbar";
import { Link } from "react-router-dom";

function hackathon_page() {
  const cardStyle = { width: "20rem" };

  // const hackathon_array = [
  //   "651b751a04579fe39231f273",
  //   "651b7612c6fec34d7200fc75",
  //   "651b762fc6fec34d7200fc7a",
  //   "651b7640c6fec34d7200fc7f",
  //   "651b764cc6fec34d7200fc84",
  // ];

  return (
    <>
      <Navbar />
      <div className="hackathon-cards">
        <div class="card" style={cardStyle}>
          <img src="/images/hack1.jpeg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Hackathon 1</h5>
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
            <h5 class="card-title">Hackathon 2</h5>
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
            <h5 class="card-title">Hackathon 3</h5>
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
            <h5 class="card-title">Hackathon 4</h5>
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
            <h5 class="card-title">Hackathon 5</h5>
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
