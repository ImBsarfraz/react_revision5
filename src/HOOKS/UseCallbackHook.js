import React, { useCallback, useEffect, useState } from "react";

const Child = ({ handleClick }) => {
    console.log("Child Rendered");
    return <button className="btn btn-success" onClick={handleClick}>Click Me</button>
}

const MemoisedChild = React.memo(Child);

const Parent = () => {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log("Button Is Clicked");
    }, []);

    // const handleClick = () => {
    //     console.log("Button Is Clicked");
    // };

    useEffect(() => {
        console.log("Handle click is Created");
    }, [handleClick]);

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>INCREMENT</button>
            {/* <Child handleClick={handleClick} /> */}
            <MemoisedChild handleClick={handleClick} />
        </>
    )
};

const UseCallbackHook = () => {
    return <Parent />
};

export default UseCallbackHook;