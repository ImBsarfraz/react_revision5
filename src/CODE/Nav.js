import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Function Componet</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/classcomponent">Class Component</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/usestatehook">Use State</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/useeffecthook">Use Effect</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/userefhook">Use Ref</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/usecontexthook">Use Context</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/usereducer">Use Reducer</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={"nav-link"} to={"/usememo"}>Use Memo</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={"nav-link"} to={"/usecallbackhook"}>Use Callback</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={"nav-link"} to={"/customhook"}>Custom Hook</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/create">Create Account</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/readlist">Candidate List</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav;