import React from "react";
import Navbar from "../components/after_loginNavbar";
import { Link } from "react-router-dom";

function TeamRegForm() {
  const storedUsername = localStorage.getItem("username");
  const storedTeam_name = localStorage.getItem("teamname");
  const storedTeam_members = localStorage.getItem("teammembers");
  const storedTeam_members_array = storedTeam_members.split(",");

  return (
    <>
      <Navbar />

      <form className="mt-5 text-form">
        <div className="form-group row">
          <label for="team-name" className="col-sm-2 col-form-label">
            Team Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="mb-5 form-control"
              id="team-name"
              value={storedTeam_name}
              readOnly
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
              value={storedUsername}
              readOnly
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="team-members" className="col-sm-2 col-form-label">
            Team Members
          </label>
          <div className="mb-5 col-sm-10" id="team-members">
            <div className="Dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="true"
              >
                Members
              </button>
              <ul className="dropdown-menu">
                {storedTeam_members_array.map((member, index) => (
                  <li key={index}>
                    <a className="dropdown-item" href="#">
                      {member}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10">
            <Link to="/HackedIn/v1/new_members">
              <button type="submit" className="btn btn-success">
                Add Members
              </button>
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}

export default TeamRegForm;
