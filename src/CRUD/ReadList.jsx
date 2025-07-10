import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ReadList = () => {
    const [candidate, setCandidate] = useState([]);

    useEffect(() => {
        const getCandidate = async () => {
            try {
                const result = await axios.get(`http://localhost:3000/candidate`);
                setCandidate(result.data);
            } catch (err) {
                alert('Failed To Get Data: ', err);
            }
        }

        getCandidate();
    }, []);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-lg table-bordered ">
                            <thead className="thead-dark bg-dark text-white">
                                <tr>
                                    <th scope="col">SN</th>
                                    <th scope="col">Action</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Designation</th>
                                    <th scope="col">Experience</th>
                                    <th scope="col">Last Organisation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    candidate.length > 0
                                        ?
                                        (
                                            candidate.map((item, idx) => (
                                                <tr key={idx}>
                                                    <td>{idx + 1}</td>
                                                    <td>
                                                        <Link to={`/edit/${item.id}`}><button className="btn btn-outline-success">Edit</button></Link>
                                                        <Link to={`/delete/${item.id}`}><button className="btn btn-outline-danger">Delete</button></Link>
                                                    </td>
                                                    <td>{item.name}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.phone}</td>
                                                    <td>{item.designation}</td>
                                                    <td>{item.experience}</td>
                                                    <td>{item.previous_organisation}</td>
                                                </tr>
                                            ))
                                        )
                                        :
                                        (
                                            <tr>
                                                <td colSpan="8" className="text-center text-muted">No candidates found.</td>
                                            </tr>
                                        )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReadList;