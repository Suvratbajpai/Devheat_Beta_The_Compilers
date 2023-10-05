import React, { useState } from "react";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import './hackathon_page.css';

function hackathon_page() {
    const cardStyle = { width: "20rem" };

    return (
        <>
            <Navbar />
            <div className="hackathon-cards">
                <div class="card" style={cardStyle}>
                    <img
                        src="/images/hack1.jpeg"
                        class="card-img-top"
                        alt="..."
                    />
                    <div class="card-body">
                        <h5 class="card-title">Hackathon 1</h5>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Facere, repudiandae.
                        </p>
                        <Link to="/HackedIn/v1/team" class="btn btn-primary">
                            Hack
                        </Link>
                    </div>
                </div>
                <div class="card" style={cardStyle}>
                    <img
                        src="/images/hack2.jpeg"
                        class="card-img-top"
                        alt="..."
                    />
                    <div class="card-body">
                        <h5 class="card-title">Hackathon 2</h5>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Facere, repudiandae.
                        </p>
                        <a href="#" class="btn btn-primary">
                            Hack
                        </a>
                    </div>
                </div>
                <div class="card" style={cardStyle}>
                    <img
                        src="/images/hack3.jpeg"
                        class="card-img-top"
                        alt="..."
                    />
                    <div class="card-body">
                        <h5 class="card-title">Hackathon 3</h5>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Facere, repudiandae.
                        </p>
                        <a href="#" class="btn btn-primary">
                            Hack
                        </a>
                    </div>
                </div>
                <div class="card" style={cardStyle}>
                    <img
                        src="/images/hack4.jpeg"
                        class="card-img-top"
                        alt="..."
                    />
                    <div class="card-body">
                        <h5 class="card-title">Hackathon 4</h5>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Facere, repudiandae.
                        </p>
                        <a href="#" class="btn btn-primary">
                            Hack
                        </a>
                    </div>
                </div>
                <div class="card" style={cardStyle}>
                    <img
                        src="/images/hack5.jpeg"
                        class="card-img-top"
                        alt="..."
                    />
                    <div class="card-body">
                        <h5 class="card-title">Hackathon 5</h5>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Facere, repudiandae.
                        </p>
                        <a href="#" class="btn btn-primary">
                            Hack
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default hackathon_page;
