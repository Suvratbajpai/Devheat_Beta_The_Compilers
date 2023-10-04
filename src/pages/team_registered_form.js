import React from "react";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import { Dropdown } from "bootstrap";

function TeamRegForm() {
    const max_width = { maxwidth: "1000rem" };
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
                            placeholder="Team Name"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label
                        for="team-leader"
                        className="col-sm-2 col-form-label"
                    >
                        Team Leader
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="mb-5 form-control"
                            id="team-leader"
                            placeholder="Team Leader"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label
                        for="team-members"
                        className="col-sm-2 col-form-label"
                    >
                        Team Members
                    </label>
                    <div className="mb-5 col-sm-10" id="team-members    ">
                        <div class="Dropdown">
                            <button
                                class="btn btn-secondary dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="true"
                            >
                                Members
                            </button>
                            <ul class="dropdown-menu">
                                <li>
                                    <a class="dropdown-item" href="#">
                                        member 1
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">
                                        member 2
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">
                                        member 3
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <Link to="/new_members">
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
