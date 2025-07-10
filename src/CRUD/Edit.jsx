import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
    const [candidate, setCandidate] = useState({
        name: "",
        email: "",
        phone: "",
        designation: "",
        experience: "",
        previous_organisation: ""
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getCandidate = async () => {
            try {
                const result = await axios.get(`http://localhost:3000/candidate/${id}`);
                setCandidate(result.data);
            } catch (err) {
                alert('Get Failed : ', err);
            }
        }
        
        getCandidate();
    },[]);

    const handleChange = (e) => {
        setCandidate({
            ...candidate,
            [e.target.name]: e.target.value
        });
    }

    const updateHandler = async (e) => {
        e.preventDefault();
        try{
            await axios.put(`http://localhost:3000/candidate/${id}`, candidate);
            alert("Account Updated");
            navigate("/ReadList");
        } catch (err) {
            alert("Update Failed: ", err);
        }
    }

    return (
        <>
            <form>
                <div className="conatiner-fluid p-5 bg-dark">
                    <div className="row">
                        <h1 className="text-white">Edit Candidate</h1>
                        <div className="col-md-4">
                            <label htmlFor="">Name</label><br />
                            <input onChange={handleChange} defaultValue={candidate.name} type="text" className="form-control text-white bg-secondary" name="name" />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="">Email</label><br />
                            <input onChange={handleChange} defaultValue={candidate.email} type="email" className="form-control text-white bg-secondary" name="email" />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="">Phone</label><br />
                            <input onChange={handleChange} defaultValue={candidate.phone} type="number" className="form-control text-white bg-secondary" name="phone" />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="">Designation</label><br />
                            <input onChange={handleChange} defaultValue={candidate.designation} type="text" className="form-control text-white bg-secondary" name="designation" />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="">Experience</label><br />
                            <input onChange={handleChange} defaultValue={candidate.experience} type="number" className="form-control text-white bg-secondary" name="experience" />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="">Previous Organisation</label><br />
                            <input onChange={handleChange} defaultValue={candidate.previous_organisation} type="text" className="form-control text-white bg-secondary" name="previous_organisation" />
                        </div>
                        <div className="col-md-4">
                            <button onClick={updateHandler} className="btn btn-info mt-5"> UPDATE ACCOUNT</button>
                        </div>
                    </div>
                </div>
            </form>

        </>
    )
}

export default Edit;