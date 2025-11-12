// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";

const root = document.getElementById("root");
if (!root) {
    throw new Error("Root element #root not found. Check index.html.");
}

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <HelmetProvider>
            <App />
        </HelmetProvider>
    </React.StrictMode>
);
