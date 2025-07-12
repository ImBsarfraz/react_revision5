import React, { useMemo } from "react";
// 6. USEMEMO HOOK - IT USED FOR EXPENSIVE CALCULATIONS
// It wont recalcuate at every re render 

const UseMemo = ({ num }) => {

    // step-1  useMemo calculates value on first render
    // <UseMemo num={5} />
    // React renders the component with num = 5.

    
    const calculate = (n) => {
        console.log('Calculating...');
        return n * 1000;
    }

    const result = useMemo(() => calculate(num), [num]);
    // useMemo runs the callback function:
    
    // step-2 React Saves the result(memoises it)
    // That value (5000) is stored in memory (memoized).

    return <h1>Result: {result} </h1>
    // <h3>Result: 5000</h3>

    // step-3 on re render if num is same -> reuse result
    // step-4 if num is changes recalculates and updates the result this saves performance
}

export default UseMemo;