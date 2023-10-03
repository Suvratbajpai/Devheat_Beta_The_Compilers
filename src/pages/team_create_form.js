import React from "react";
import Navbar from "../components/navbar";
import { Dropdown } from "bootstrap";
import { Link } from "react-router-dom";
function TeamForm() {
    const max_width = { maxwidth: "1000rem" };
    return (
        <>
            <Navbar />

            <form className="mt-5 text-form">
                <div className="form-group row">
                    <label
                        for="inputEmail3"
                        className="col-sm-2 col-form-label"
                    >
                        Team Name
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="inputEmail3"
                            placeholder="Team Name"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label
                        for="inputEmail3"
                        className="col-sm-2 col-form-label"
                    >
                        Team Leader
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="inputEmail3"
                            placeholder="Team Leader"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <Link to='/team_created'>
                            <button type="submit" className="btn btn-primary">
                                Create
                            </button>
                        </Link>
                    </div>
                </div>
            </form>
        </>
    );
}

export default TeamForm;
