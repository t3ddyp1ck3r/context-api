import { useContext } from "react";
import { CountContext } from "./context/CountContext";
import { UserContext } from "./context/UserContext";
import HeaderComp from "./components/HeaderComp";
import ButtonComp from "./components/ButtonComp";
import LittleSpan from "./components/LittleSpan";

const App = () => {
    const { count, setCount } = useContext(CountContext); // Access count context
    const { user, setUser } = useContext(UserContext); // Access user context

    // Increment count
    const handleClick = () => {
        setCount((prev) => prev + 1);
    };

    // Handle login/logout
    const handleLogin = () => {
        setUser((prev) =>
            prev
                ? null
                : { email: "someemail@test.net", userName: "Test User" }
        );
    };

    return (
        <div
            className="app"
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "1em",
                backgroundColor: user ? "#204d21" : "#4d0221", // Green for logged-in, red otherwise
                padding: "2em",
                color: "white",
                minHeight: "100vh",
            }}
        >
            <HeaderComp />
            <ButtonComp />
            <LittleSpan />
            <button
                onClick={handleLogin}
                style={{
                    padding: "1em",
                    backgroundColor: user ? "#a1cf9f" : "#cf9fa1", // Green for logged-in, red otherwise
                    color: "black",
                    border: "none",
                    cursor: "pointer",
                }}
            >
                {user ? "Logout" : "Login"}
            </button>
            {user && (
                <div className="alert" style={{ textAlign: "center" }}>
                    You are now logged in !!!
                </div>
            )}
        </div>
    );
};

export default App;
