import { useContext } from "react";
import { CountContext } from "../context/CountContext";
import { UserContext } from "../context/UserContext";

const ButtonComp = () => {
    const { setCount } = useContext(CountContext); // Access setCount
    const { user } = useContext(UserContext); // Access user context

    const incrementCount = () => {
        setCount((prevCount) => prevCount + 1);
    };

    return (
        <button
            onClick={incrementCount}
            style={{
                padding: "1em",
                fontSize: "1em",
                backgroundColor: user ? "#a1cf9f" : "#cf9fa1", // Same color logic
                color: "black",
                border: "none",
                cursor: "pointer",
            }}
        >
            Increment Count
        </button>
    );
};

export default ButtonComp;
