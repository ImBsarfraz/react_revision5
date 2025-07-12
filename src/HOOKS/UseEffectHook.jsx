import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            const url = "https://jsonplaceholder.typicode.com/users";
            try {
                const result = await fetch(url);
                const userData = await result.json();
                setUser(userData);
            } catch (error) {
                alert("Fetch Failed: ", error);
            }
        }

        fetchUser();
    }, []);

    // console.log(user);

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    {
                        user.map((item) => (
                            <div className="col-md-4 mt-4">
                                <div className="card">
                                    <div className="card-header">
                                        {item.name}
                                    </div>
                                    <div className="card-body">
                                        {item.email}
                                    </div>
                                    <div className="card-footer">
                                        {item.phone}
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