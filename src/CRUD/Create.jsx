import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [candidate, setCandidate] = useState({
        name: "",
        email: "",
        phone: "",
        designation: "",
        experience: "",
        previous_organisation: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setCandidate({
            ...candidate,
            [e.target.name]: e.target.value
        });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:3000/candidate`, candidate);
            alert('Account Created');
            navigate("/ReadList");
        } catch (err) {
            alert(`Create Failed: ${err}`);
        }
    }

    console.log(candidate);
    return (
        <>
            <h1>CREATE ACCOUNT</h1>
            <form>
                <div className="container-fluid bg-dark p-5">
                    <div className="row">
                        <div className="col-md-4">
                            <label className="text-white" htmlFor="">Candidate Name:</label><br />
                            <input defaultValue={candidate.name} onChange={handleChange} className="bg-secondary text-white" type="text" name="name" />
                        </div>
                        <div className="col-md-4">
                            <label className="text-white" htmlFor="">Candidate Email:</label><br />
                            <input defaultValue={candidate.email} onChange={handleChange} className="bg-secondary text-white" type="email" name="email" />
                        </div>
                        <div className="col-md-4">
                            <label className="text-white" htmlFor="">Candidate Phone:</label><br />
                            <input defaultValue={candidate.phone} onChange={handleChange} className="bg-secondary text-white" type="phone" name="phone" />
                        </div>
                        <div className="col-md-4 mt-5">
                            <label className="text-white" htmlFor="">Candidate Designation:</label><br />
                            <input defaultValue={candidate.designation} onChange={handleChange} className="bg-secondary text-white" type="text" name="designation" />
                        </div>
                        <div className="col-md-4 mt-5">
                            <label className="text-white" htmlFor="">Candidate Experience:</label><br />
                            <input defaultValue={candidate.experience} onChange={handleChange} className="bg-secondary text-white" type="number" name="experience" />
                        </div>
                        <div className="col-md-4 mt-5">
                            <label className="text-white" htmlFor="">Previous Organisation:</label><br />
                            <input defaultValue={candidate.previous_organisation} onChange={handleChange} className="bg-secondary text-white" type="text" name="previous_organisation" />
                        </div>
                        <div className="col-md-4 mt-5">
                            <button onClick={submitHandler} type="submit" className="btn btn-outline-success">CREATE ACCOUNT</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Create;