import { useState } from "react";
import React from "react";
import Navbar from "../components/navbar";
import { Dropdown } from "react-bootstrap";
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
      // ... (rest of your code)
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Navbar />

      <form className="mt-5 text-form">
        <div className="form-group row">
          <label htmlFor="team-name" className="col-sm-2 col-form-label">
            Team Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="mb-5 form-control"
              id="team-name"
              placeholder="Team Name"
              name="Team_name"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="team-leader" className="col-sm-2 col-form-label">
            Team Leader
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="mb-5 form-control"
              id="team-leader"
              placeholder="Team Leader"
              name="teamleader"
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
