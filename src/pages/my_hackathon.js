import React, { useState, useEffect } from "react";
import Navbar from "../components/after_loginNavbar";
import "./my_hackathon.css";

function MyHackathon() {
  const token = localStorage.getItem("token");

  const [requests, setRequests] = useState([]);
  const [hackathons, setHackathons] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "http://localhost:5483/HackedIn/v1/my-hackathons",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `${token}`,
            },
          }
        );

        if (response.status === 200) {
          const data = await response.json();

          if (data) {
            setHackathons(data.hackathons || []);
            setRequests(data.requests || []);
          }
        } else {
          console.error("Cannot fetch Data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [token]);

  const acceptRequest = (requestIndex) => {
    const acceptedRequest = requests[requestIndex];

    setHackathons([...hackathons, acceptedRequest.hackathon_name]);
    setRequests(requests.filter((_, index) => index !== requestIndex));
  };

  const rejectRequest = (requestIndex) => {
    setRequests(requests.filter((_, index) => index !== requestIndex));
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div>
          <h3>Requests Received</h3>
          <ul className="request-list">
            {requests.map((request, index) => (
              <li key={index} className="request-item">
                <span>
                  Team Name: {request.team_name}, Hackathon Name:{" "}
                  {request.hackathon_name}
                </span>
                <button
                  className="accept-button"
                  onClick={() => acceptRequest(index)}
                >
                  Accept
                </button>
                <button
                  className="reject-button"
                  onClick={() => rejectRequest(index)}
                >
                  Reject
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Hackathons Participated</h3>
          <ul className="hackathon-list">
            {hackathons.map((hackathon, index) => (
              <li key={index} className="hackathon-item">
                {hackathon}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default MyHackathon;
