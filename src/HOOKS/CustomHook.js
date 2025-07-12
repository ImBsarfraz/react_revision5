import React, { useState } from "react";

// CUSTOM HOOK - ITUSED TO REUSE LOGIC
// USE TOGGLE HOOK - Use To Toggle A Value hide&show/on&off

function useToggle(initialValue = false) {
    const [value, setValue] = useState(initialValue);

    const toggle = () => {
        setValue(prev => !prev);
    }

    return [ value, toggle];
}

function ToggleComponent() {
    const [ show, toggleShow ] = useToggle();

    return(
        <>
        <button onClick={toggleShow}>Change Mode</button>
        {show ? 'Dark Mode Activated' : 'Light Mode Activated'}
        </>
    )
}

const CustomHook = () => {
    return <ToggleComponent />
}

export default CustomHook;