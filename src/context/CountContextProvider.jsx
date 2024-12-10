import { useState } from "react";
import { CountContext } from "./CountContext";

const CountContextProvider = ({ children }) => {
    const [count, setCount] = useState(0); // Initialize count state

    return (
        <CountContext.Provider value={{ count, setCount }}>
            {children}
        </CountContext.Provider>
    );
};

export default CountContextProvider;
