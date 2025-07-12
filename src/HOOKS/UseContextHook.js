import React, { createContext, useContext } from "react";

// When to use useContext?
// Sharing global data like:

// Theme (light/dark)

// Auth (user login info)

// Language (i18n)

// Cart data (in eCommerce)

// Step 1. Theme Context Is Created To Hold Our Global Value "theme"

const ThemeContext = createContext();
// This creates a container to hold our global value (theme).

// step 2. Theme Provider Is Created For Wrapping All Components In Side It
// This Makes theme value (dark) available to all components inside it
function ThemeProvider({children}) {
    const theme = "dark";
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

// 3. useContext(ThemeContext) is used to get the value.
// This accesses the global value (dark) without props


function ThemedButton() {
    const theme = useContext(ThemeContext);
    // This line inside ThemedButton accesses the global value (dark) without props.
    return <button style={{background: theme === "dark" ? '#333' : '#fff'}}>Theme: {theme}</button>
    // button uses the theme value
}

const UseContextHook = () => {
    return (
        // This makes the theme value (dark) available to all components inside it.
        <ThemeProvider>
        <ThemedButton />
        </ThemeProvider>
    )
}

export default UseContextHook;