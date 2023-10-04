import React from "react";
import Navbar from "../components/navbar";

function AddMem() {
    return (
        <>
            <Navbar />
            <div className="mt-5 skills-institute">
                <label
                    for="exampleDataList1"
                    className="add_mem-formtext form-label"
                >
                    Skills :
                </label>
                <input
                    className="mb-5 form-control"
                    list="datalistOptions1"
                    id="exampleDataList1"
                    placeholder="Add Your Skills"
                    name="Skills"
                />
                <datalist id="datalistOptions1">
                    <option value="Backend Devloper" />
                    <option value="Frontend Devloper" />
                    <option value="Full Stack Devloper" />
                    <option value="MERN Stack Devloper" />
                    <option value="Blockchain Devloper" />
                </datalist>
                <label
                    for="exampleDataList2"
                    className="add_mem-formtext form-label"
                >
                    Institution:
                </label>
                <input
                    className="mb-5 form-control"
                    list="datalistOptions2"
                    id="exampleDataList2"
                    placeholder="Add Your Institution"
                    name="Institution"
                />
                <datalist id="datalistOptions2">
                    <option value="IIIT Surat" />
                    <option value="IIT Kharapur" />
                    <option value="IIIT Hyderabad" />
                    <option value="RV College of Engineering" />
                    <option value="IIIT Kota" />
                </datalist>

                <button type="button" class="btn btn-primary">
                    Find
                </button>
            </div>
        </>
    );
}

export default AddMem;
