import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            const url = "https://jsonplaceholder.typicode.com/users";
            const result = await fetch(url);
            const usersData = await result.json();
            setUser(usersData);
        }
        fetchUser()
    }, []);

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    {
                        user.map((me) => (
                            <div className="col-md-3 mt-5">
                                <div className="card">
                                    <div className="card-header">
                                        <p><strong>Name: </strong>{me.name}</p>
                                    </div>
                                    <div className="card-body">
                                        <p><strong>Email: </strong>{me.email}</p>
                                    </div>
                                    <div className="card-footer">
                                        <p><strong>Phone: </strong>{me.phone}</p>
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

export default UseEffectHook;