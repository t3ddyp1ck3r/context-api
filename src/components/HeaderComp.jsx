import { useContext } from "react";
import { CountContext } from "../context/CountContext";

const HeaderComp = () => {
    const { count } = useContext(CountContext); // Consume count context

    return (
        <header>
            <h1>Header Component</h1>
            <p>Current Count: {count}</p>
        </header>
    );
};

export default HeaderComp;
