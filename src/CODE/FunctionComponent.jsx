import React from "react";
import data from "./MapData";

export default function FunctionComponent() {
    return (
        <>
            <h1>CANDIDATE DETAILS</h1>

            <div className="container-fluid">
                <div className="row">
                    {
                        data.map((candidate) => (
                            <div className="col-md-3">
                                <div className="card text-center">
                                    <div className="card-header">
                                        <img src={candidate.imgUrl} width={"80%"} class="card-img-top"></img>
                                        <h2>{candidate.name}</h2>
                                    </div>
                                    <div className="card-body">
                                        <h3>{candidate.designation}</h3>
                                        <h4>{candidate.experience}</h4>
                                    </div>
                                    <div className="card-footer">
                                        <button className="btn btn-success">HIRE</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </>
    )
}