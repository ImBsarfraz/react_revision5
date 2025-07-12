import React, { useReducer } from "react";

// USE REDUCER - IT USED FOR ADVANCED MANAGEMENT OF STATE IT IS ALTERNATIVE TO USESTATE

const initialState = 0;
// Initial State

// Reducer Funtion Decides How Stae Will Change At Perticular Action 
function reducer(state, action) {
    switch (action.type) {
        case 'INC': return state + 1;
        case 'DEC': return state - 1;
        case 'RESET': return 0;
        default: return state;
    }
}

function UseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);
    // This Line Uses the useReducer Hook To Manage the state
    // Here We Have Initialised The useReducer Hook
    // useReducer(reducer, initialState) This Calls the usereducer Hook
    // it needs two arguments
    // 1. reducer -> A function that decides how to update the state
    // 2. initialState -> The Starting Value of your state

    // usereducer returns an array with two values 
    // 1. state -> the current state value (like with useState);
    // 2. dispatch ->a function you call to update the state(like useState but more powerful)

    // Create a piece of state called state and a function dispatch to update it. 
    // The state will start with initialState, and every time I call dispatch, 
    // it will run the reducer function to decide the new value.

    return (
        <>
            <h1>Count: {state}</h1>
            <button className="btn btn-outline-success" onClick={() => dispatch({type: 'INC'})}>+</button>
            <button className="btn btn-outline-danger" onClick={() => dispatch({type: 'DEC'})}>-</button>
            <button className="btn btn-outline-dark" onClick={() => dispatch({type: "RESET"})}>Reset</button>
        </>
    )
}

export default UseReducer;