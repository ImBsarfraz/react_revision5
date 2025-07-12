import React, { useRef } from "react";

// Use Ref Hook Used access dom elements withou re rendering

const UseRefHook = () => {
    const inputRef = useRef(null);

    const handleFocus = () => {
        inputRef.current.focus();
    }

    return (
        <>
        <input type="text" ref={inputRef} />
        <button onClick={handleFocus}>FOCUS </button>
        
        </>
    )
}

export default UseRefHook