import React, { useState } from "react";

const UseStateHook = () => {
    const [ count, setCount ] = useState(0);

    const changeState = () => {
        setCount(count+1);
    }

    return (
        <>
        <h1>Count: {count}</h1>
        <button onClick={changeState} className="btn btn-dark">CHNAGE STATE</button>
        </>
    )
}

export default UseStateHook;