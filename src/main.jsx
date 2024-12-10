import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CountContextProvider from "./context/CountContextProvider";
import UserContextProvider from "./context/UserContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <UserContextProvider>
            <CountContextProvider>
                <App />
            </CountContextProvider>
        </UserContextProvider>
    </React.StrictMode>
);
