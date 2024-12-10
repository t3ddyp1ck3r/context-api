import { useContext } from "react";
import { CountContext } from "../context/CountContext";

const LittleSpan = () => {
    const { count } = useContext(CountContext); // Consume count context

    return <span>LittleSpan Component: Count is {count}</span>;
};

export default LittleSpan;
