import React, { useState } from "react";

const UseStateHook = () => {
    const [data, setData] = useState("Sarfraz Bagwan");
    const [count, setCount] = useState(0);

    const changeState = () => {
        setData("Sarfraz Nisar Bagwan");
        setCount(count + 1);
    }
    return (
        <>
            <div className="p-5">
                <h1>Use State Hook</h1>
                <h2>Name: {data}</h2>
                <h3>Count: {count}</h3>
                <button onClick={changeState} className="btn btn-dark">CHANGE STATE</button>
            </div>
        </>
    )
}
export default UseStateHook;