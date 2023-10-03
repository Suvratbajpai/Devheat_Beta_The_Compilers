import React from "react";
import Navbar from "../components/navbar";
import { datalist } from "bootstrap";
function AddMem() {
    return (
        <>
            <Navbar />
            <div className="mt-5 skills-institute">
                <label
                    for="exampleDataList"
                    class="add_mem-formtext form-label"
                >
                    Skills :
                </label>
                <input
                    class="form-control"
                    list="datalistOptions"
                    id="exampleDataList"
                    placeholder="Type to search..."
                />
                <datalist id="datalistOptions" />
                <option value="San Francisco" />
                <option value="New York" />
                <option value="Seattle" />
                <option value="Los Angeles" />
                <option value="Chicago" />
                <datalist />

                <label for="exampleDataList" class="add_mem-formtext form-label">
                    Institution:
                </label>
                <input
                    class="form-control"
                    list="datalistOptions"
                    id="exampleDataList"
                    placeholder="Type to search..."
                />
                <datalist id="datalistOptions" />
                <option value="San Francisco" />
                <option value="New York" />
                <option value="Seattle" />
                <option value="Los Angeles" />
                <option value="Chicago" />
                <datalist />
            </div>
        </>
    );
}

export default AddMem;
