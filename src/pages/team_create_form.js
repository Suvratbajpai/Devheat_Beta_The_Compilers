import { useState } from "react";
import React from "react";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";

function TeamForm() {
  const storedUsername = localStorage.getItem("username");

  const [formData, setFormData] = useState({
    Team_name: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const token = localStorage.getItem("token");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { Team_name } = formData;
    try {
      const response = await fetch(
        "http://localhost:5483/HackedIn/v1/hackathons/651b7640c6fec34d7200fc7f/application",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
          body: JSON.stringify({ Team_name }),
        }
      );

      if (response.status === 200) {
        const { teamid, teammembers } = await response.json();
        localStorage.setItem("team_id", teamid);
        localStorage.setItem("team_name", Team_name);
        localStorage.setItem("team_members", teammembers);
        console.log("Authentication successful");
        navigate(`/HackedIn/v1/team_created`);
      } else {
        console.error("Authentication failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const max_width = { maxwidth: "1000rem" };
  return (
    <>
      <Navbar />

      <form className="mt-5 text-form">
        <div className="form-group row">
          <label for="team-leader" className="col-sm-2 col-form-label">
            Team Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="mb-5 form-control"
              id="team-leader"
              placeholder="Team Name"
              name="Team_name"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="team-leader" className="col-sm-2 col-form-label">
            Team Leader
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="mb-5 form-control"
              id="team-leader"
              placeholder="Team Leader"
              name="teamleader"
              onChange={handleChange}
              value={storedUsername}
              readOnly
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Create
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default TeamForm;
